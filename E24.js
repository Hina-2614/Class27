function User(name) {

    this.name = name;
}
User.prototype.welcome = function () {
    console.log(`Greetings! ${this.name}`)
};
let userObj = new User("Hina");
userObj.welcome();
