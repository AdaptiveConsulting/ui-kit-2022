import { useTheme } from "@mui/material";

const UseIsDarkMode = () => {
  const {palette} = useTheme();

  return palette.mode === "dark";
}

export default UseIsDarkMode;