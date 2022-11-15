export default class Rotor {
  alphabet: string;
  letters: string;
  notch: string;

  constructor(a: string, l: string, n: string) {
    this.alphabet = a;
    this.letters = l;
    this.notch = n;
  }

  forwardSignal(signal: number) {
    let left = this.alphabet;
    let right = this.letters;
    let letter = right[signal];
    signal = left.indexOf(letter);
    return signal;
  }

  backwardSignal(signal: number) {
    let right = this.letters;
    let letter = this.alphabet[signal];
    signal = right.indexOf(letter);
    return signal;
  }

  rotate(n = 1, Forward = true) {
    for (let i = 0; i < n; i++) {
      if (Forward) {
        let charL = this.alphabet[0];
        this.alphabet = this.alphabet.slice(1);
        this.alphabet += charL;

        let charR = this.letters[0];
        this.letters = this.letters.slice(1);
        this.letters += charR;
      } else {
        let charL = this.alphabet[25];
        let left = charL;
        this.alphabet = this.alphabet.substring(0, this.alphabet.length - 1);
        left += this.alphabet;
        this.alphabet = left;

        let charR = this.letters[25];
        let right = charR;
        this.letters = this.letters.substring(0, this.letters.length - 1);
        right += this.letters;
        this.letters = right;
      }
    }
  }

  rotateToLetter(letter: string) {
    let n = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter);
    this.rotate(n, true);
  }

  ringSettings(ring: number) {
    this.rotate(ring - 1, false);
    let n_Notch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(this.notch);
    this.notch = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[(n_Notch - (ring - 1)) % 26];
  }
}
