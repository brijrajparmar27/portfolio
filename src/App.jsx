import { Contact } from "./Pages/Contact/Contact";
import { Experience } from "./Pages/Experience/Experience";
import { Introduction } from "./Pages/Introduction/Introduction";
import { Projects } from "./Pages/Projects/Projects";
import { Socials } from "./Pages/Socials/Socials";
import { Technologies } from "./Pages/Technologies/Technologies";

function App() {
  return (
    <div className="App">
      <Introduction />
      <Technologies />
      <Experience />
      <Projects />
      <Socials />
      <Contact />
    </div>
  );
}

export default App;
