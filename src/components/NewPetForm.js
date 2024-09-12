import { v4 as uuid } from "uuid";
import { useState } from "react";

function NewPetForm({addPet}) {

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    animal_type: ""
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  function handleSubmit(event){
    event.preventDefault()

    const newPet = {
      id: uuid(),
      ...formData
    }

    addPet(newPet)
    
    setFormData({
      name: "",
      image: "",
      animal_type: ""
    })
  }

  return (
    <div className="new-pet-form">
      <h2>New Pet</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={updateFormData} type="text" name="name" placeholder="Pet name" value={formData.name} />
        <input onChange={updateFormData} type="text" name="image" placeholder="Image URL" value={formData.image} />
        <input onChange={updateFormData} type="text" name="animal_type" placeholder="Animal type" value={formData.animal_type} />
        <button type="submit">Add Pet</button>
      </form>
    </div>
  );
}
  
  export default NewPetForm;