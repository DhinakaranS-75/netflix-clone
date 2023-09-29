import React from "react";
import HomeScreen from "./HomeScreen/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./LoginScreen/LoginScreen";

function App() {
  const user = null;
  return (
    <BrowserRouter>
      {!user ? (
        <LoginScreen />
      ) : (
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
