export default class Plugboard {
  pairs: string[];

  constructor(p: string[]) {
    this.pairs = p;
  }
  plugboard() {
    let left = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let right = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charleft = left.split("");
    let charright = right.split("");
    var A: string;
    var B: string;

    A = "";
    B = "";
    this.pairs = this.pairs;

    for (let i = 0; i < this.pairs.length; i++) {
      let pair = this.pairs[i];
      A = pair[0];
      B = pair[1];

      let posA = charright.indexOf(A);
      let posB = charright.indexOf(B);

      charleft[posB] = charright[posA];
      charleft[posA] = charright[posB];
    }
    return charleft;
  }

  forwardSignal(signal: number) {
    const p = new Plugboard(this.pairs);
    let left = p.plugboard();
    let right = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = right[signal];
    signal = left.indexOf(letter);
    return signal;
  }

  backwardSignal(signal: number) {
    const p = new Plugboard(this.pairs);
    let left = p.plugboard();
    let right = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letter = left[signal];
    signal = right.indexOf(letter);
    return signal;
  }
}
