// promises

// console.log("Hello One")
// setTimeout (function() {
//     console.log("Hello Two")
// }, 2000)
// console.log('Hello Three')


// events

// function toggleHide(){
//     let btn = document.getElementById('btn');
//     let para = document.getElementById('para');

//     if(para.style.display != 'none') {
//         para.style.display = 'none';
//     }else{
//         para.style.display = 'block';
//     }
// }


function func1() {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
          let error = true;
          if(!error){
            console.log('your promise has been resolved');
            resolve();
          }else{
            console.log('Your promise has not been resolved');
            reject('sorry! not fulfullied');
          }
        }, 2000);
    })
}


func1().then(function() {
    console.log("ThankYou");
}).catch(function() {
    console.log("OPS!!!")
})