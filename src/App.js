import "./App.css";
import Instrument from "./Instrument";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import InstrumentList from "./InstrumentList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<InstrumentList />} />
          <Route exact path="/:details" element={<Instrument />} />
        </Routes>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
