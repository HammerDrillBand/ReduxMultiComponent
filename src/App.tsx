import './App.css';
import ReduxInput from './components/input/ReduxInput';
import Mult from './components/Mult/Mult';
import Subt from './components/Subt/Subt';
import Plus from './components/plus/Plus';

function App() {
  return (
    <div className="App">
      <ReduxInput/>
      <Mult />
      <Subt/>
      <Plus/>
    </div>
  );
}

export default App;
