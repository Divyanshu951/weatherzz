import { useQuery } from "@tanstack/react-query";
import { getWeather } from "./api";
import Card from "./components/cards/Card";

function App() {
  const { data } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeather({ lat: "33.44", lon: "-94.04" }),
  });

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">
        {JSON.stringify(data?.current).slice(0, 100)}
      </Card>
      <Card title="Hourly Forecast">
        {JSON.stringify(data?.hourly).slice(0, 100)}
      </Card>
      <Card title="Daily Forecast">
        {JSON.stringify(data?.daily).slice(0, 100)}
      </Card>
    </div>
  );
}

export default App;

// Tailwind
// data fetching - tanstack query
