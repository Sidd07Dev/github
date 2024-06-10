class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`UserName is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course added by :  ${this.username}`);
    }
}

// const user=new User("Rohon")
// console.log(user);
const chai=new Teacher("chai","chai@ch.com","1234")
chai.addCourse()
chai.logMe()