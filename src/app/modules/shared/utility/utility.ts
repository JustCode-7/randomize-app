export class Utility {
  /**
   * usage:<br>
   *     await Utility.delay(5000); <br>
   * pause for 5 seconds
   * @param ms
   */
  static delay(ms: number) {
    return new Promise(res => setTimeout(res, ms));
  }
}

