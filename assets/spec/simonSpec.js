describe("power is off", function(){
    it("there is no power", function(){
        x=true;
        expect(x).toBe(true);
    });
});

//describe("ensure 'sequence' array has 20 numbers from 'play' function", function() {
//    it("'sequence' should have 20 numbers from 'play' function", function() {
//        sequence = [];
//        spyOn(window, "powerButton");
//        expect(play).toHaveBeenCalled();
//    });
//});

describe("powerOff function", function() {
    it("should return true if the playerTurn is turned off", function() {
        expect(playerTurn).toMatch(false);
    });
 });

// describe("makeBright function", function() {
//    it("should return true if the playerTurn is turned off", function() {
//        expect(playerTurn).toMatch(false);
//    });
// });

// describe("restart function", function() {
//    it("should return true if the playerTurn is turned off", function() {
//        expect(playerTurn).toMatch(false);
//    });
// });
