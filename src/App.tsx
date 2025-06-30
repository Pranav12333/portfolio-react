// src/App.tsx

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* Add more sections like <About />, <Projects />, <Contact /> here */}
    </div>
  );
}

export default App;
