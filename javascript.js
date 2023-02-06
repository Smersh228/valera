const valera = document.createElement("h2")
valera.innerHTML = "VALERA LOH"
valera.className = "s"
let e = 0
function Click() {
 const div = document.querySelector(".sueta")
  
  
e++
//document.querySelector(".sueta").remove()
document.querySelector(".pp").innerHTML=`${e}`
console.log(e)

if (e === 11) {

 

document.body.after(valera)
} 
else {
valera.remove()


}

//if (e > 12) {

//    document.body.remove()
    
//}



}




//d(starm1)
//div_sueta.addEventListener("click", () => {starm1++})


