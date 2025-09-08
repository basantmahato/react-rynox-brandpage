import './addToCartPopup.css';

const AddToCartPopup = ({ isVisible, productName }) => {
  if (!isVisible) {
    return null; // Don't render if not visible
  }

  return (
    <div className="popup-container">
      <div className="popup-content">
        <p>{productName} has been added to the cart!</p>
      </div>
    </div>
  );
};

export default AddToCartPopup;