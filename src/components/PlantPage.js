import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const handleDelete = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    });
  };

  const handleUpdatePrice = (id, newPrice) => {
    setPlants((prevPlants) => prevPlants.map((plant) => 
      plant.id === id ? { ...plant, price: newPrice } : plant
    ));

    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({price: newPrice}),
    });
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearchChange={handleSearchChange} />
      <PlantList 
        plants={plants} 
        searchTerm={searchTerm} 
        onDelete={handleDelete} 
        onUpdatePrice={handleUpdatePrice}
      />
    </main>
  );
}

export default PlantPage;