import React, {useState} from "react";

function PlantCard({ plant, onDelete, onUpdatePrice }) {
  const [price, setPrice] = useState(plant.price);
  const [isInStock, setIsInStock] = useState(true);

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onUpdatePrice(newPrice);
  };

  const toggleStockStatus = () => {
    setIsInStock((prevStatus) => !prevStatus);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: {price}
        <input 
          type="number" 
          value={price} 
          onChange={handlePriceChange}
        />
      </p>
      <button className="primary" onClick={onDelete}>
        Delete
      </button>
      <button onClick={toggleStockStatus}>
        {isInStock ? "In Stock" : "Out of Stock"}
      </button>
    </li>
  );
}

export default PlantCard;