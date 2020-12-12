describe ("the FizzBuzz function", function() {

    beforeEach(function() {
        fizzybuzzy = new fizzbuzz();
    });

    describe("test module", function() {

    it("should be defined", function () {
        expect(fizzbuzz).toBeDefined();
    });
        

    it("Should return FizzBuzz when the number is divisible for 3 and 5", function() {
        var result = fizzbuzz(15);
        expect(result).toBe("FizzBuzz");
    });
    
    it("Should return FizzBuzz when the number is divisible for 3", function() {
        var result = fizzbuzz(3);
        expect(result).toBe("Fizz");
    });
    
    it("Should return FizzBuzz when the number is divisible for 5", function() {
        var result = fizzbuzz(5);
        expect(result).toBe("Buzz");
    });
    
        
    it("Should return the number", function() {
        var result = fizzbuzz(11);
        expect(result).toBe(result);
    });
});
})
    
