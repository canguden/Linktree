import { useTheme } from "next-themes";
import { RxHalf2 } from "react-icons/rx";
import { BsCircleHalf } from "react-icons/bs"

const ThemeChanger = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className=" transition-colors text-xl py-2 px-4"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {resolvedTheme === "dark" ? (
        <BsCircleHalf />
      ) : (
        <BsCircleHalf />
      )}
    </button>
  );
};

export default ThemeChanger;
