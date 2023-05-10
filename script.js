const form = document.getElementById("form")
const timeAlert = document.getElementById("timeAlert")
const startTime = document.getElementById("startTime")
const endTime = document.getElementById("endTime")

form.onsubmit = (event)=>{
    event.preventDefault()
    let inputs = document.getElementsByClassName("field")
    
    let validity = true
    for(let i = 0;i<inputs.length;i++){
            if(inputs[i].value == ""){
                inputs[i].classList.add("invalid")
                validity = false
            }
            else{
                inputs[i].classList.remove("invalid")
                
                
            }
           
        
    }
    if(startTime.value>endTime.value&&startTime.value!=""&&endTime.value!=""){
        startTime.classList.add("invalid")
        endTime.classList.add("invalid")
        timeAlert.style.display = "block"
        validity = false
    }
    else{
        timeAlert.style.display = "none"
    }
    
    (validity===true)&&sendForm()
}

function sendForm(){
    let formData = new FormData(form)
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);
    console.log(formDataJsonString)
    form.reset()
}

