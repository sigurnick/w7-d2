const name = document.getElementById("name-input");
const saveButton = document.querySelector("form");
const cancelButton = document.getElementById("cancel-button");
const nameOutput = document.getElementById("name-output");
const contatore = document.getElementById('contatore')




//salva il nome
const saveName = function (e) {
  e.preventDefault();

  let nameStored = localStorage.getItem("name");
  if (nameStored) {
    alert("Nome già inserito");
  } else {
    localStorage.setItem("name", name.value);
    nameOutput.innerText = name.value;
    name.value = "";
  }
};


//cancella il nome
const cancelName = function () {
  let nameStored = localStorage.getItem("name");
  if (nameStored) {
    localStorage.setItem("name", "");
    nameOutput.innerText = "";
  } else {
    alert("Nessu nome salvato");
  }
};


const countUp = function (){
    contatore.innerText = ''
    
let  count = sessionStorage.getItem('count')
if(count)
{
   
    Number(count)
    count++
    sessionStorage.setItem('count',count)
    contatore.innerText = count
}else{
   

    sessionStorage.setItem('count',1)
    contatore.innerText = '1'

}
}












let nameStored = localStorage.getItem("name");
nameOutput.innerText = nameStored;

saveButton.addEventListener("submit", saveName);
cancelButton.addEventListener("click", cancelName);
countUp()
setInterval(countUp,1000)