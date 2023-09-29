import Card from "./components/Card";
import ToggleButton from "./components/ToggleButton";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 h-screen w-full flex flex-col items-center justify-center gap-8">
      <ThemeProvider>
        <ToggleButton />
        <Card />
      </ThemeProvider>
    </div>
  );
}

export default App;
