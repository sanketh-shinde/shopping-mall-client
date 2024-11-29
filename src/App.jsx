import { Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import Profile from "./components/Profile";
import LoginForm from "./components/Login";

import AssignManager from "./components/AssignManager";
import CreateStock from "./components/stock/CreateStock";
import UpdateStock from "./components/stock/UpdateStock";
import StockNavBar from "./components/stock/StockNavBar";
import ModifyStock from "./components/stock/ModifyStock";
import AsideNavBar from "./components/stock/AsideNavBar";
import ProductCard from "./components/stock/ProductCard";
import StockLandingPage from "./components/stock/StockLandingPage";
import ShowStocks from "./components/stock/ShowStocks";


function App() {
  return (
    <>
      {/* <StockNavBar />
      <Routes>
        <Route path="/">
          <Route path="createStock" element={<CreateStock />} />
          
          <Route path="modify" element={<ModifyStock />} />
          <Route path="profile" element={<Profile />} />
          
        </Route>
      </Routes> */}
      {/* <AsideNavBar/> */}
      {/* <ModifyStock/> */}
      {/* <ProductCard/> */}
      
      <StockLandingPage/>
      {/* <ShowStocks/> */}
    </>
  );
}

export default App;
