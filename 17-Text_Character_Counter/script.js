const TextInput = document.getElementById("textInput");
const CharCount = document.getElementById("charCount");
TextInput.addEventListener("input", function(){
    CharCount.innerText = TextInput.value.length ;
})