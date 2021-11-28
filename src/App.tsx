import { useRef } from "react";
import "./App.css";
import useIsThroughScreen from "./hooks/useIsThroughScreen";

function App(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement>();
  const isInside = useIsThroughScreen(scrollRef);
  console.log(isInside);
  return (
    <div className="App">
      <div
        style={{ height: window.innerHeight * 1.1, backgroundColor: "red" }}
      ></div>
      <div
        style={{ height: window.innerHeight * 2, backgroundColor: "aqua" }}
        ref={(refs) => {
          if (refs) {
            scrollRef.current = refs;
          }
        }}
      ></div>
      <div
        style={{ height: window.innerHeight, backgroundColor: "yellow" }}
      ></div>
    </div>
  );
}

export default App;
