let success = false;
let promise = new Promise ((resolve,reject)=>{
    if(success){(()=>{resolve,("I succeded")},5000)
        setTimeout
        resolve ("I succeded")
    }
    else{
        reject ("I am still ")
    }
}).then(()=>{console.log("I will work hard");})
.catch (()=>{console.log("I will upskill");})
.finally(()=>{console.log("I am worthy");})

const student =  ()=>{
    let result =  promise;
    console.log({result});
}

student()