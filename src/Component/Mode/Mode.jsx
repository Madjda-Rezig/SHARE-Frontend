import React from "react";

function Mode() {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  // initially set the theme and "listen" for changes to apply them to the HTML tag
  React.useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <label className="swap swap-rotate mr-8 ml-96">
      <input onClick={toggleTheme} type="checkbox" />
      <div className="swap-on">DARK MODE</div>
      <div className="swap-off">LIGHT MODE</div>
    </label>
  );
}
export default Mode;
