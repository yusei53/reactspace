

import './App.css';

import { InlineStyle } from './components/InlineStyle';
import { Css } from './components/cssModules';
import { StyledJsx } from './components/styledJsx';

export function App() {


  return (
    <div className="App">
     <InlineStyle />
     <Css />
     <StyledJsx />
    </div>
  );
}

export default App;
