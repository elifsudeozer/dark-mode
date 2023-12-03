const myinput = document.getElementById("my-input")
myinput.addEventListener("change",(e)=>{
    document.querySelector("body").classList.toggle("dark",e.target.checked)
})