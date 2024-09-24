import Pet from "./Pet";

// Delete the pets, deletePet, and updatePet props from the PetList component
function PetList({ pets, deletePet, updatePet }){

    // Write the code to retrieve the pets stateful variable using useOutletContext()

    const petComponents = pets.map(pet => {
        // Delete the deletePet and updatePet props from <Pet/>
        return <Pet key={pet.id} pet={pet} deletePet={deletePet} updatePet={updatePet}/>
    })

    return (
        <ul className="pet-list">{petComponents}</ul>
    );
}

export default PetList;
