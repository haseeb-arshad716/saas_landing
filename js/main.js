let input = document.querySelector("input");
let tableRow = document.querySelectorAll("tr");

input.addEventListener("input", ()=>{
    let inputValue = input.value.toLowerCase();
    for(let row of tableRow){
     let rowText = row.innerText.toLowerCase();
     if(rowText.includes(inputValue)){
      row.style.display = "";  
     }
     else{
        row.style.display = "none";
     }
    }
});