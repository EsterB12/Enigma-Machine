export default class Reflector {
  letters: string;

  constructor(l: string) {
    this.letters = l;
  }

  reflect(signal: number) {
    let left = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let right = this.letters;

    let letter = right[signal];
    signal = left.indexOf(letter);
    return signal;
  }
}
