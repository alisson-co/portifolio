import { AboutContainer } from "./AboutContainer";
import { ProjectsContainer } from "./ProjectsContainer";
import { TechnologiesContainer } from "./TechnologiesContainer";

import '../assets/styles/components/maincontent.sass';

export function MainContent() {
    return (
     <main id="main-content">
        <AboutContainer />
        <TechnologiesContainer />
        <ProjectsContainer/>
     </main>
    );
};
  