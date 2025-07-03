num_drums=document.querySelectorAll(".drum").length;
for (var i=0 ;i<num_drums; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        alert("I got clicked");
    })
}