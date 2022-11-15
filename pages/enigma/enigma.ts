export default class EnigmaMachine {
  ref: any;
  rotor1: any;
  rotor2: any;
  rotor3: any;
  pb: any;
  kb: any;

  constructor(re: any, r1: any, r2: any, r3: any, p: any, k: any) {
    this.ref = re;
    this.rotor1 = r1;
    this.rotor2 = r2;
    this.rotor3 = r3;
    this.pb = p;
    this.kb = k;
  }

  ringSettings(rings: number[]) {
    this.rotor1.ringSettings(rings[0]);
    this.rotor2.ringSettings(rings[1]);
    this.rotor3.ringSettings(rings[2]);
  }

  setKey(key: string) {
    this.rotor1.rotateToLetter(key[0]);
    this.rotor2.rotateToLetter(key[1]);
    this.rotor3.rotateToLetter(key[2]);
  }

  encipher(letter: string) {
    if (
      this.rotor2.alphabet[0] == this.rotor2.notch &&
      this.rotor3.alphabet[0] == this.rotor3.notch
    ) {
      this.rotor1.rotate(1, true);
      this.rotor2.rotate(1, true);
      this.rotor3.rotate(1, true);
    } else if (this.rotor2.alphabet[0] == this.rotor2.notch) {
      this.rotor1.rotate(1, true);
      this.rotor2.rotate(1, true);
      this.rotor3.rotate(1, true);
    } else if (this.rotor3.alphabet[0] == this.rotor3.notch) {
      this.rotor2.rotate(1, true);
      this.rotor3.rotate(1, true);
    } else {
      this.rotor3.rotate(1, true);
    }

    let signal = this.kb.forward(letter);
    signal = this.pb.forwardSignal(signal);
    signal = this.rotor3.forwardSignal(signal);
    signal = this.rotor2.forwardSignal(signal);
    signal = this.rotor1.forwardSignal(signal);
    signal = this.ref.reflect(signal);
    signal = this.rotor1.backwardSignal(signal);
    signal = this.rotor2.backwardSignal(signal);
    signal = this.rotor3.backwardSignal(signal);
    signal = this.pb.backwardSignal(signal);
    letter = this.kb.backward(signal);
    return letter;
  }
}
