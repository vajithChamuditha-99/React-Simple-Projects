import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, area } from './Actions';

function App() {
  const counter = useSelector((state) => state.counter);
  const view = useSelector((state) => state.viewReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h5>Radius : {counter}</h5>
        <div className="plusMinus">
          <button className="button" onClick={() => dispatch(increment())}>
            <b>+</b>
          </button>
          <button className="button" onClick={() => dispatch(decrement())}>
            <b>-</b>
          </button>
        </div>
        <button className="button" onClick={() => dispatch(area())}>
          <b>calculate</b>
        </button>
        <h5>Area : {view}</h5>
      </header>
    </div>
  );
}

export default App;
