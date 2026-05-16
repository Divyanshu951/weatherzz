import Landing from "./components/Landing";
import MobileHeader from "./components/MobileHeader";
import Dashboard from "./Dashboard";
import {
  createContext,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

type AppContextType = {
  isSidePanelOpen: boolean;
  setIsSidePanelOpen: Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);

export default function App() {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  return (
    <>
      <Landing />

      <AppContext.Provider
        value={{ isSidePanelOpen, setIsSidePanelOpen }}
      >
        <MobileHeader />
        <Dashboard />
      </AppContext.Provider>
    </>
  );
}