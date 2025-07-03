function CheckPalindrome(){
    let inputText = document.getElementById("inputText");
    let text = inputText.value.trim();
    if (text==="" || text===""){
        alert("Enter atleast 1 letter");
    }
    let lower_text = text.toLowerCase();
    let reverse_text = lower_text.split("").reverse().join("");
    document.querySelector(".rev_text_word").innerHTML=reverse_text;
    if (lower_text === reverse_text){
        document.querySelector(".yes_no").innerHTML="Yes! It's a palindrome 🎉";
    }
    else{
        document.querySelector(".yes_no").innerHTML="No! Not a palindrome ❌";
    }
}
function resetText() {
    document.getElementById("inputText").value = "";
    document.querySelector(".rev_text_word").innerText = "";
    document.querySelector(".yes_no").innerText = "";
}