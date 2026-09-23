import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const auth = JSON.parse(
        localStorage.getItem("auth")
    );

    return auth?.isLoggedIn || false;
  });
  
  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Footer />
    </>
  );
}

export default App;