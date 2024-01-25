import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "light") {
      document.querySelector("html").classList.remove("dark");
    } else {
      document.querySelector("html").classList.add("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
    setCount((preCount) => preCount + 1);
  };

  return (
    <div className="h-screen flex justify-center items-center dark:bg-neutral-900">
      <button
        className="bg-slate-200 px-4 py-2 rounded-lg hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white"
        onClick={handleChangeTheme}
      >
        Change Theme {count}
      </button>
    </div>
  );
}

export default App;
