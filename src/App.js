import React, { useState } from "react";
import "./App.css";
import OrderDetails from "./components/OrderDetails/index";
import DataGrid from "./components/DataGrid/index";
import Navbar from "./components/Navbar";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  console.log(selectedTransaction);

  return (
    <Provider store={store}>
      <Navbar />
      <DataGrid />
      <OrderDetails selectedTransaction={selectedTransaction} />
    </Provider>
  );
};

export default App;
