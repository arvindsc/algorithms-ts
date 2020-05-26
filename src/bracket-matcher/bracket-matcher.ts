export class BracketMatcher {
  pairs: MatchingPair[] = [];
  constructor(public matchingPairs: MatchingPair[]) {
    this.pairs = matchingPairs;
  }
  validatePair(input: string): string {       
    let pair = input.split(""); // ([})
 
    if (pair.length % 2 !== 0) {
      return 'NO';
    }

    for (var k = 0; k < pair.length/2; k++) {
      let isValid = "NO";
 
      for (let i = 0; i < this.pairs.length; i++) {
        if (
          pair[k] === this.pairs[i].openingBracket &&
          pair[pair.length - k - 1] === this.pairs[i].closingBracket
        ) {
          isValid = "YES";
        }
      }
      if (isValid === "NO") return "NO";
    }

    return "YES";
  }
}
export class MatchingPair {
  constructor(public openingBracket: string, public closingBracket: string) {}
}
