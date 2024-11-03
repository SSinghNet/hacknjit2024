import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/pages/Layout";
import Home from "@/pages/home";
import Basket from "@/pages/Basket";
import Catalog from "@/pages/Catalog";
import Profile from "@/pages/Profile";
import NoPage from "@/pages/NoPage";
import Item from "./pages/Item";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:itemID" element={<Item />} />
          <Route path="basket" element={<Basket />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
