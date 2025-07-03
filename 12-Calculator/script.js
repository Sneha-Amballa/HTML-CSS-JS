let display = document.querySelector(".result");
op_set=["+","-","*","/","%"]
function numInput(num){
    if (display.innerHTML==0){
        display.innerHTML=num;
    }
    else{
        display.innerHTML+=num;
    }
}
function clears(){
    display.innerHTML=0;
}
function deleteLast(){
    display.innerHTML=display.innerHTML.slice(0,-1);
    if (display.innerHTML==""){
        display.innerHTML="0";
    }
}
function operator(operator){
    if(op_set.includes(display.innerHTML.slice(-1))){
        display.innerHTML=display.innerHTML.slice(0,-1)+operator;
    }
    else{
        display.innerHTML+=operator;
    }
}
function point(){
    if (op_set.includes(display.innerHTML.slice(-1))){
        display.innerHTML=display.innerHTML+"0.";
    }
    else{
        display.innerHTML+=".";
    }
}
function equal(){
    try{
        display.innerHTML=eval(display.innerHTML);
    }
    catch{
        display.innerHTML="Error";
    }
}