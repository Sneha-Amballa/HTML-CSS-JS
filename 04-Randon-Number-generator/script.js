function Random(){
    let num = Math.floor((Math.random()*100))+1;
    document.querySelector('.number').innerHTML=num;
};