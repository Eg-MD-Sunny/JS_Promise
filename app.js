//====>>Example 01 <<====
// let complete = false;
// let prom = new Promise(function(resolve, reject) {
//     if(complete){
//         resolve('I am Successful');
//     }
//     else{
//         reject('I am Fail');
//     }
// });
// console.log(prom);


//let workDone = true;
// let workDone = false;
// let prome = new Promise(function(resolve,reject){
//     if(workDone){
//         resolve('I am successful');
//     }
//     else{
//         reject('I am Fail');
//     }
// })
// console.log(prome);


//====>>Example 02 <<====
// function prom(complate){
//     return new Promise(function(resolve,reject){
//         if(complate){
//             resolve('I am successful');
//         }else{
//             reject('I am fail');
//         }
//     })
// }
// console.log(prom(true));
// console.log(prom(false));


//====>>Example 03 <<====
// function prom(complate){
//     return new Promise(function(resolve,reject){
//         console.log("Fetching Data, Please wait..")

//         setTimeout(()=>{
//             if(complate){
//                 resolve('I am successful'); 
//             }else{
//                 reject('I am fail');
//             }
//         },1000)
//     })
// }

// //Seperate function
// let onfulfilment = (result) =>{
//     console.log(result);
// }
// let onRejected = (error) =>{
//     console.log(error);
// }

// //Output
// //console.log(prom(true));
// // prom(true).then(onfulfilment);
// // prom(true).catch(onRejected);

// prom(false).then(onfulfilment);
// prom(false).catch(onRejected);


//====>>Example 04 <<====
// function prom(complate){
//     return new Promise(function(resolve,reject){
//         console.log('Fatching Data, Please wait');
//         setTimeout(()=>{
//             if(complate){
//                 resolve('I am successful');
//             }else{
//                 reject('I am fail');
//             }
//         },1000)
//     })
// }
// let onfulfilment = (result)=>{
//     console.log(result);
// }
// let onrejected = (error)=>{
//     console.log(error);
// }
// //===>ES6 Promises chaining
// prom(false).then(onfulfilment).catch(onrejected);


//====>>Example 05 <<====
// function prom(complate){
//     return new Promise(function(resolve,reject){
//         console.log('Fetching Data. Please wait...');
//         setTimeout(()=>{
//             if(complate){
//                 resolve('I am successful')
//             }else(
//                 reject('I am fail')
//             )
//         },3000)
//     })
// }
// prom(true).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


//====>>Example 06 <<====
// function prom(a,b){
//     return new Promise (function(resolve,reject){
//         console.log("Fetching Data, Please wait...")
//         var c = a/b;
//         setTimeout(()=>{
//             if(a,b){
//                 resolve(`Your answer: ${c}`)
//             }else(
//                 reject('Failed to calculate')
//             )
//             },3000)
//         })   
// }
// prom(6,0).then((result)=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })


//====>>Example 07 <<====
//====>Using Ajax for fetching data
function prom(){
    return new Promise (function(resolve,reject){
        console.log("Fetching Data, Please wait...")
       
        setTimeout(()=>{
            $.get("https://jsonplaceholder.typicode.com/posts",function(data){
                resolve(data);
            }).fail(err=>{
                reject('Fail to load JSON');
            })
            },2000)
        })   
}
prom().then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
})












































