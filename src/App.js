// theme styled-components
// import { ThemeProvider } from "styled-components";
// routing
import { Routes, Route } from "react-router-dom";
// pages
import { Home, DetailPage } from "./pages";
// components
import { Navbar, Footer } from "./components";
// // theme
// import themes from "./styles/themes";
// css
import GlobalStyles from "./styles/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:artistName" element={<DetailPage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
