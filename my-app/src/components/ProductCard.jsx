import React,{useState} from "react";


const ProductCard = ({ hotel }) => {
    const [showButton, setShowButton] = useState(false);
  
    const handleButtonClick = () => {
      // Handle button click here (e.g., show more details, book, etc.)
    };
  
    return (
      <div className="product-card" style={{display:"inline-block"}}>
        <img src={hotel.imageUrl} alt={hotel.name} />
        <h3>{hotel.name}</h3>
        <p>{hotel.description}</p>
        <p>Price: ${hotel.price}</p>
        {showButton ? (
          <button onClick={handleButtonClick}>Book Now</button>
        ) : (
          <button onClick={() => setShowButton(true)}>Show Details</button>
        )}
      </div>
    );
  };
export default ProductCard;