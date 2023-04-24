import {BrowserRouter} from "react-router-dom"

import './App.css';
import { Home } from './home';
import { Page } from './page';
import { Page1 } from './page1';

export function App() {


  return (
    <BrowserRouter>
    <div className="App">
      <Home />
      <Page />
      <Page1 />
    </div>
    </BrowserRouter>
  );
}

export default App;
