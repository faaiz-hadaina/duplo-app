import axios from "axios";

// Function to open modal and fetch order details
async function openModalWithDetails(
  transaction,
  setSelectedTransaction,
  setIsOpen,
  closeModal
) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/order-details/${transaction.businessID}`
    );
    const orderDetails = response.data;
    console.log(orderDetails);
    setSelectedTransaction({ orderDetails });
    setIsOpen(true);
  } catch (error) {
    console.error("Error fetching order details:", error);
    closeModal(); // Close the modal in case of an error
  }
}

export default openModalWithDetails;
