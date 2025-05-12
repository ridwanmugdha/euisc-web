import "./App.css";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import ClassesPage from "./pages/ClassesPage";
import TeachersPage from "./pages/TeachersPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import PanelPage from "./pages/PanelPage";
import ManagementPage from "./pages/Management";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{minHeight:'90vh'}}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/classes" element={<ClassesPage />} />
          <Route exact path="/academics" element={<TeachersPage />} />
          <Route exact path="/management" element={<ManagementPage />} />
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/panels" element={<PanelPage />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;