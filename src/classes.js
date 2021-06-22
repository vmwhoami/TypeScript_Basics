var Person = /** @class */ (function () {
    function Person(a, b, c, d) {
        var _this = this;
        this.presentation = function () {
            return _this.name + " with the \n    family name of " + _this.surname + " is a " + _this.gender + " \n    and has " + _this.phone + " phone number";
        };
        this.name = a;
        this.surname = b;
        this.phone = c;
        this.gender = d;
    }
    return Person;
}());
var jim = new Person("Jim", "Kwik", 69442476, "male");
console.log(jim.presentation());
