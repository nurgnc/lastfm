import React from "react";
// icons
import { BsFillMoonStarsFill } from "react-icons/bs";
// redux
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../store/theme";
// css
import { ThemeButtons } from "../styles/Navbar.styled";
// themes
import themes from "../styles/themes";

function ThemeButton({ variant }) {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  variant = theme;
  return (
    <>
      {theme === "dark" ? (
        <ThemeButtons
          type="button"
          theme={theme}
          onClick={() => dispatch(setTheme("light"))}
        >
          <BsFillMoonStarsFill size={25} color={themes[theme].textColor} />
        </ThemeButtons>
      ) : (
        <ThemeButtons
          type="button"
          theme={theme}
          onClick={() => dispatch(setTheme("dark"))}
        >
          <BsFillMoonStarsFill size={25} color={themes[theme].textColor} />
        </ThemeButtons>
      )}
    </>
  );
}

export default ThemeButton;
