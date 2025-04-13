function change_name(){
    let name = prompt("Enter name you want to display");
    let change = document.getElementById('change');
    change.innerHTML=name;
}