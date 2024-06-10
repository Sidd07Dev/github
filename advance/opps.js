const user={
    username:"Rohon",
    password:"123456",
    logincount:8,
    userDetails:()=>{
        // console.log("data fetch from DB");
        console.log(`Username is :${this.username}`);
    }
}
console.log(user.username);
console.log(user.userDetails());