import {BrowserRouter, Routes, Route} from 'react-router-dom';

import * as Styled from "./style";
import Main from "../pages/Main";
import Pomodoro from '../pages/Pomodoro';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/pomodoro' element={<Pomodoro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
