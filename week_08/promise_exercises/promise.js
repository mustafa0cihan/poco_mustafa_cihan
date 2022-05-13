// let promise = new Promise((resolve,
//     reject) => {
//     // the function is executed automatically when the promise is constructed

//     //after 1 second signal that the job is done with the result "done"

//     setTimeout(() => resolve("done"), 1000)
//         ;
// })

// promise.then(
//     result => { alert(result); console.log("test"); } //shows "done"
//     // error => alert(error)
// )


let promise = new Promise((resolve,
    reject) => {
    let obj = {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    }
    resolve(obj)
    reject("something did not work");

})


promise.then(
    result => console.log(result.title),
    error => console.log(error)
);

