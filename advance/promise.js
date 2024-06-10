// const promisevar=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let err=true
//         if(!err){
//            resolve({username:"rohon",password:"12345"})
//         }else{
//             reject('error on pro,mise')
//         }
//     },1000)
// });
// async  function consume(){
//    try {
//     const response=await promisevar
//     console.log(response);
//    } catch (error) {
//     console.log(`error throw ${error}`);
//    }
// }
// consume()


// async function getAllUsers() {
//  try {
//     const response= await  fetch("https://jsonplaceholder.typicode.com/users")
//     const data= await response.json();
//     console.log(data);
//     console.log(typeof data);
//  } catch (error) {
//     console.log("E:",error);
//  }
// }
// getAllUsers();


fetch("https://api.github.com/")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})