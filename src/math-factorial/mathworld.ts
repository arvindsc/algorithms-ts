export class MathWorld {
  static factorial(num: number) {
    return num > 0 ? num * this.factorial(num - 1) : 1;
  }
}
