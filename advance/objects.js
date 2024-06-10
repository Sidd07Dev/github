function createUsername(username,score) {
    this.username=username
    this.score=score
    return {username:this.username,score:this.score}
}
const data=createUsername('rohon',20)
console.log(data.username);
console.log(data.score);