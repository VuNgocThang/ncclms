function resolveAfter2(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve('resolved')
        },2000)
    })
    
}
async function asyncCall(){
    console.log('calling');
    var result = await resolveAfter2()
    console.log(result);
}
asyncCall();
console.log('has call');