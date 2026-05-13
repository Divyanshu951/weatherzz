import HourlyForecast from "./components/cards/HourlyForecast";
import DailyForecast from "./components/cards/DailyForecast";
import CurrentForecast from "./components/cards/CurrentForecast";

function App() {
  return (
    <div className="flex flex-col gap-8">
      <CurrentForecast />
      <HourlyForecast />
      <DailyForecast />
    </div>
  );
}

export default App;

// Tailwind
// data fetching - tanstack query
