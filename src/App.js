import { useState } from 'react';
import Grid from './Grid';
import Header from './Header';
import Info from './Info';

function App() {

  const [details, setDetails] = useState("");

  return (
    <div className="App">
        <Header />
        <Info details={details}/>
        <main>
          <Grid details={details} setDetails={setDetails} />
        </main>    
        <footer>
        <p>Website created using <a href="https://github.com/adamhungerford/react-npclib">react-npclib</a> by Ed Hungerford.</p>
        </footer>
    </div>
  );
}

export default App;
