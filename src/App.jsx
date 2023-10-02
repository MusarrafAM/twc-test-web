import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import AddContact from "./pages/AddContact";
import Contacts from "./pages/Contacts";
import Error from "./pages/Error";

export default function App() {
  return (
    <main className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/add_contact" element={<AddContact />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
