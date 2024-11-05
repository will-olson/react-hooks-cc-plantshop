import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, searchTerm, onDelete, onUpdatePrice}) {

  const filteredPlants = plants.filter((plant) => 
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ul className="cards">
      {filteredPlants.map((plant) => (
        <PlantCard 
          key={plant.id || plant.name}
          plant={plant} 
          onDelete={() => onDelete(plant.id)} 
          onUpdatePrice={(newPrice) => onUpdatePrice(plant.id, newPrice)} 
        />
      ))}
    </ul>
  );
}

export default PlantList;