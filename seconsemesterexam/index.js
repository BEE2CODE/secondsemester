let count = 0;
function increment(){
   count += 1;
   let countEl = document.getElementById("count-el")
   console.log(countEl)
   countEl.innerText=count;

   
}

function decrement(){
    count -=1;
    let countEl = document.getElementById("count-el")
    console.log(countEl)
    countEl.innerText =count
}


function save(){
    let countEl = document.getElementById("count-el")
    let saveEl = document.getElementById("save-el");
    let countStr = count + " - " ;
    console.log(saveEl);
    saveEl.textContent+= countStr;
    countEl.innerText = 0;
    count = 0;

}



