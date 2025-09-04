import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <CustomCursor />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
