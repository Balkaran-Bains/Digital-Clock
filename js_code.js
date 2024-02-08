const clock= document.querySelector('#clock')

setInterval(function(){
    let hulk= new Date();
    const b=  hulk.toLocaleTimeString();
    clock.innerHTML =b;
},1000);