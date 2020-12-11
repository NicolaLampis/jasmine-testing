//  describe("drinkAbout", function(age) {

    beforeEach(function() {
        drink = new drinkAbout;
    })

    describe("Drinking tests", function() {
        it ("Should return - Sorry. I can’t tell what drink because that age is incorrect!", function() {
            
            expect(drinkAbout).toBeDefined();
        });

        it ("Should return - Drink Toddy", function() {
            // declare a value for the age
            var yourAge = drinkAbout(11);
            expect(yourAge).toBe("Drink Toddy")
        });
        
        it ("Should return - Drink Coke", function() {
            
            var yourAge = drinkAbout(17);
            expect(yourAge).toBe("Drink Coke")
        });

        it ("Should return - Drink Beer", function() {
            
            var yourAge = drinkAbout(18);
            expect(yourAge).toBe("Drink Beer")
        });

        it ("Should return - Drink Whisky", function() {
            
            var yourAge = drinkAbout(22);
            expect(yourAge).toBe("Drink Whisky")
        });

        it ("Should return - Sorry. I can’t tell what drink because that age is incorrect!", function() {
            
            var yourAge = drinkAbout(200);
            expect(yourAge).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });

        it ("Should return - Sorry. I can’t tell what drink because that age is incorrect!", function() {
            
            var yourAge = drinkAbout("help");
            expect(yourAge).toBe("Sorry. I can’t tell what drink because that age is incorrect!")
        });


    })
