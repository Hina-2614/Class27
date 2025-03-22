function User(name) {
    this.name=name;
    this.welcome=function () {
        console.log(`Greetings! ${this.name}`)
    };
    let userObj=new User("Hina");
    userObj.welcome();
}