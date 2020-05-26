import { BracketMatcher, MatchingPair } from './bracket-matcher';
describe('BracketMatcher', () => {
    it('should initialize matching pairs',()=>{
        const matchingPair = new MatchingPair('(',')');
        expect(matchingPair.openingBracket).toBe('(');
        expect(matchingPair.closingBracket).toBe(')');
    });    

    it('should initialize bracket matcher',()=>{
        const matchingPairs = [new MatchingPair('(',')')];
        let bracketMatcher= new BracketMatcher(matchingPairs);
        expect(bracketMatcher.pairs.length).toBe(1);
    });  
    it('should initialize multiple bracket matcher',()=>{
        const matchingPairs = [new MatchingPair('(',')'), new MatchingPair('[',']'),new MatchingPair('{','}')];
        let bracketMatcher= new BracketMatcher(matchingPairs);
        expect(bracketMatcher.pairs.length).toBe(3);
    });  

    it('should validate the correct pair',()=>{
        const matchingPairs = [new MatchingPair('(',')'), new MatchingPair('[',']'),new MatchingPair('{','}')];
        let bracketMatcher= new BracketMatcher(matchingPairs);
        expect(bracketMatcher.validatePair('()')).toBe('YES');
        expect(bracketMatcher.validatePair('[]')).toBe('YES');
        expect(bracketMatcher.validatePair('{}')).toBe('YES');
    }); 
    it('should validate the incorrect pair',()=>{
        const matchingPairs = [new MatchingPair('(',')'), new MatchingPair('[',']'),new MatchingPair('{','}')];
        let bracketMatcher= new BracketMatcher(matchingPairs);
        expect(bracketMatcher.validatePair('(]')).toBe('NO');
        expect(bracketMatcher.validatePair(')(')).toBe('NO');
        expect(bracketMatcher.validatePair('{)')).toBe('NO');
    }); 
    
    it('should validate the correct pair',()=>{
        let bracketMatcher= initialiseBracketMatcher();
        expect(bracketMatcher.validatePair('()')).toBe('YES');
    }); 
    it('should validate input is not even',()=>{
        let bracketMatcher= initialiseBracketMatcher();
        expect(bracketMatcher.validatePair('())')).toBe('NO');
    }); 

    it('should validate multiple correct pairs',()=>{
        let bracketMatcher= initialiseBracketMatcher();
        expect(bracketMatcher.validatePair('(((())))')).toBe('YES');
    }); 
    it('should validate mixed pairs as valid',()=>{
        let bracketMatcher= initialiseBracketMatcher();
        expect(bracketMatcher.validatePair('([[{()}]])')).toBe('YES');
    }); 
    it('should validate mixed pairs as invalid',()=>{
        let bracketMatcher= initialiseBracketMatcher();
        expect(bracketMatcher.validatePair('([[{(\}]])')).toBe('NO');
    });
    function initialiseBracketMatcher(){
        const matchingPairs = [new MatchingPair('[',']'), new MatchingPair('(',')'),new MatchingPair('{','}')];
        let bracketMatcher= new BracketMatcher(matchingPairs);
        return bracketMatcher;
    }
});
