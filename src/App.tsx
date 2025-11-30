import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import EspaciosList from "./pages/EspaciosList";
import EspacioDetalle from "./pages/EspacioDetalle";
import ReservasList from "./pages/ReservasList";
import "./App.css";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<EspaciosList />} />
          <Route path="/espacios/:id" element={<EspacioDetalle />} />
          <Route path="/reservas" element={<ReservasList />} />
        </Routes>
      </BrowserRouter>
    </SnackbarProvider>
  );
}
