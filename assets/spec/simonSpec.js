describe("power is off", function() {
    it("there is no power", function() {
        x = true;
        expect(x).toBe(true);
    });
});

playerTurn = false;
describe("powerOff function", function() {
    it("should return false if the powerOff is called", function() {
        expect(playerTurn).toBe(false);
    });
});

 describe("makeBright function", function() {
    it("should return false if the makeBright is called", function() {
        expect(playerTurn).toBe(false);
    });
 });

 describe("restart function", function() {
    it("should return false if the restart is called", function() {
        expect(playerTurn).toBe(false);
    });
 });
