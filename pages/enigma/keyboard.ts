export default class Keyboard {
  forward(letter: string) {
    let signal = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letter);
    return signal;
  }

  backward(signal: number) {
    let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[signal];
    return letter;
  }
}
