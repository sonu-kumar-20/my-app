import React, { useState } from "react"

export default function Form(){
   let [formData,setFormData] = useState({
    fullName: "",
    userName: "",
   });
   

   let handleInputChange = (event)=>{
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setFormData((currData)=>{
      currData[fieldName] = newValue;
      return {...currData};
    })

   }
  

   return(
    <form>
      <label htmlFor="fullName">Enter Your Full Name</label> <br />
      <input type="text" placeholder="Enter Full Name"  value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
      <br /> <br />
      <label htmlFor="username">Enter Your Full Name</label> <br />
      <input type="text" placeholder="Enter user Name"  value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>  
      <button>Submit</button>
    </form>
   )
}

// follow of data is 
// input change-> onchange method call -> hadleInput -> setFullName method call() -> fullName -> re-render