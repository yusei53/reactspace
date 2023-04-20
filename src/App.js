

import './App.css';

import { InlineStyle } from './components/InlineStyle';
import { Css } from './components/cssModules';
import { StyledJsx } from './components/styledJsx';
import { StyledComponent } from './components/StyledComponent';

export function App() {


  return (
    <div className="App">
     <InlineStyle />
     <Css />
     <StyledJsx />
     <StyledComponent />
    </div>
  );
}

export default App;
