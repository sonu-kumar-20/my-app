import React, { useState } from "react";

export default function Comment() {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));

    

  };

  let hadleInput = (event) =>{
    console.log(formData);
    event.preventDefault();
    setFormData({
       username: "",
    remarks: "",
  
    });
  }

  return (
   <form action="" onSubmit={hadleInput}>
      <input
        type="text"
        name="username"
        value={formData.username}
        placeholder="Enter your name"
        onChange={handleInputChange}
      />
      <br /><br />

      <textarea
        name="remarks"
        value={formData.remarks}
        placeholder="Add few words here"
        onChange={handleInputChange}
      />

      <br /><br />
      <button>Submit Comment</button>
   </form>
  );
}
