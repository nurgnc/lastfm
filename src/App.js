// theme styled-components
import { ThemeProvider } from "styled-components";
// routing
import { Routes, Route } from "react-router-dom";
// redux
import { useSelector } from "react-redux";
// pages
import { Home, DetailPage } from "./pages";
// components
import { Navbar, Footer } from "./components";
// // theme
import themes from "./styles/themes";
// css
import GlobalStyles from "./styles/Global";

function App() {
  const { theme } = useSelector((state) => state);

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:artistName" element={<DetailPage />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
