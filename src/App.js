import React from "react";
import "./App.css";
import OrderDetails from "./components/OrderDetails/index";
import DataGrid from "./components/DataGrid/index";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <DataGrid />
      <OrderDetails />
    </Provider>
  );
};

export default App;
