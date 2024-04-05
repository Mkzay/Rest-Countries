import Home from "./Pages/Home";
export default function App() {
  const isDarkMode = false;

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Home />
    </div>
  );
}
