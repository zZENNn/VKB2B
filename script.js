const form = document.getElementById("form")
console.log(form)
form.onsubmit = (event)=>{
    event.preventDefault()
    let formData = new FormData(form)
    let formDataObject = Object.fromEntries(formData.entries());
    let formDataJsonString = JSON.stringify(formDataObject);
  console.log(formDataJsonString)
}

