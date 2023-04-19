
import { useState, useCallback } from 'react';
import './App.css';
import { ChildArea } from './ChildArea';

export function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);


  const onChangeClick = (e) => {
    setText(e.target.value)
  }

  const OnClickOpen = () => {
    setOpen(!open)
  }

  const OnClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeClick}/>
      <br />
      <br />
      <button onClick={OnClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={OnClickClose}/>
    </div>
  );
}

export default App;
