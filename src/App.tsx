import { MainContent } from "./components/MainContent";
import { SideBar } from "./components/SideBar";

import './assets/styles/components/app.sass';

export function App() {
  return (
      <div id="portifolio">
        <h1>Alisson Oliveira</h1>
          <SideBar />
          <MainContent />
    </div>
  );
}