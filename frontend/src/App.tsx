import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GamesView from './GamesView';
import TablesView from './TablesView';
import StartView from './StartView';
import GameView from './GameView';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartView />} />
          <Route path="games" element={<GamesView />} />
          <Route path="tables" element={<TablesView/>} />
          <Route path="game" element={<GameView/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
