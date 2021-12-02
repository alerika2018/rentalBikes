import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Stores from "./views/stores/stores.jsx";
import Home from "./views/home/home.jsx";
import StoreDetail from "./views/storeDetail/storeDetail.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/store" component={Stores} />
          <Route path="/store-detail" component={StoreDetail} />
          <Route path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
