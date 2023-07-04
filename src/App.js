// import './App.css';
import { Routes, Route } from "react-router-dom"
import { Navigation } from "./components/Navigate";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { HomePage } from "./pages/HomePage/HomePage";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </>
  );
}

export default App;