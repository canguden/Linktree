import ThemeChanger from "./Themechanger";
import { useState, useEffect } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="max-w-2xl mt-5 flex justify-end">
      <div className="xl:fixed flex">
        {mounted && <ThemeChanger />}
      </div>
    </section>
  );
};

export default Header;
