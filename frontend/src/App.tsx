import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"


function App() {
  return (
    <BrowserRouter>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2500,
          style: {
            background: "#fff",
            color: "#111827",
            borderRadius: "12px",
            padding: "14px 18px",
            boxShadow:
              "0 8px 24px rgba(0,0,0,0.12)"
          }
        }}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App
