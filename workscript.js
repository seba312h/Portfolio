document.querySelector("#prototype").addEventListener("mouseover", prototypeUp)
document.querySelector("#web").addEventListener("mouseover", webUp)
document.querySelector("#redesign").addEventListener("mouseover", redesignUp)

document.querySelector("#spil").addEventListener("mouseover", spilUp)



function prototypeUp() {
    console.log("prototypeUp");
    
    document.querySelector("#prototype").classList.add("scale")
    
    document.querySelector("#prototype").removeEventListener("mouseover", prototypeUp);
    
    
     document.querySelector("#prototype").addEventListener("animationend", prototypeReset);
    
}

function prototypeReset() {
    console.log("prototypeReset")
    
    document.querySelector("#prototype").removeEventListener("animationend", prototypeReset);
    
    document.querySelector("#prototype").classList.remove("scale")
    
    
    
    document.querySelector("#prototype").addEventListener("mouseover", prototypeUp);
    
}

function webUp() {
    console.log("webUp");
    
    document.querySelector("#web").classList.add("scale")
    
    document.querySelector("#web").removeEventListener("mouseover", webUp);
    
    
     document.querySelector("#web").addEventListener("animationend", webReset);
    
}

function webReset() {
    console.log("webReset")
    
    document.querySelector("#web").removeEventListener("animationend", webReset);
    
    document.querySelector("#web").classList.remove("scale")
    
    document.querySelector("#web").addEventListener("mouseover", webUp);
    
}

function redesignUp() {
    console.log("redesignUp");
    
    document.querySelector("#redesign").classList.add("scale")
    
    document.querySelector("#redesign").removeEventListener("mouseover", redesignUp);
    
    
     document.querySelector("#redesign").addEventListener("animationend", redesignReset);
    
}

function redesignReset() {
    console.log("redesignReset")
    
    document.querySelector("#redesign").removeEventListener("animationend", redesignReset);
    
    document.querySelector("#redesign").classList.remove("scale")
    
    document.querySelector("#redesign").addEventListener("mouseover", redesignUp);
    
}


function spilUp() {
    console.log("spilUp");
    
    document.querySelector("#spil").classList.add("scale")
    
    document.querySelector("#spil").removeEventListener("mouseover", spilUp);
    
    
     document.querySelector("#spil").addEventListener("animationend", spilReset);
    
}

function spilReset() {
    console.log("spilReset")
    
    document.querySelector("#spil").removeEventListener("animationend", spilReset);
    
    document.querySelector("#spil").classList.remove("scale")
    
    document.querySelector("#spil").addEventListener("mouseover", spilUp);
    
}





