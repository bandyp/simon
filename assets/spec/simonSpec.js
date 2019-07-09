describe("ensure 'sequence' called 20 times", function() {
    it("'sequence' should be called times from 'play' function", function() {
        sequence = [];
        expect(sequence.length).toBe(20);
    });
});

describe("powerOff function", function() {
    it("should return true if the players turn is turned off", function() {
        
        expect('playerTurn').not.toBe(true);
    });
});

describe("makeBright function", function() {
    it("should return true if the players turn is turned off", function() {
        expect(playerTurn).toBe(false);
    });
});

describe("restart function", function() {
    it("should return true if the players turn is turned off", function() {
        expect(playerTurn).not.toBe(false);
    });
});
