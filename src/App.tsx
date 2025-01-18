import { BuildProgress } from "./components/BuildProgress";
import { Members } from "./components/Members";
import { Navbar } from "./components/Navbar";
import { Overview } from "./components/Overview";
import { TechnicalDetails } from "./components/TechnicalDetails";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <div className="w-full h-full bg-background">
      <div className="flex flex-col gap-12 pb-12">
        <Navbar />
        <Overview />
        <Members />
        <TechnicalDetails />
        <Timeline />
        <BuildProgress />
      </div>
    </div>
  );
}

export default App;
