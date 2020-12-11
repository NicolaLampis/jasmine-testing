drinkAbout = function (age) {
    if (age < 0) {
     return "Sorry. I can’t tell what drink because that age is incorrect!";}
    if (age < 14) {
         return "Drink Toddy";}
    if (age < 18 && age >= 14) {
        return "Drink Coke";}
    if (age < 21 && age >= 18) {
        return "Drink Beer";}
    if (age < 130 && age >=21) {
        return "Drink Whisky";}
    else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";}


}