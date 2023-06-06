import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/counter/counterSlice'
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const name = useSelector((state) => state.counter.name);
  const dispatch = useDispatch();

  return (
    <div className="d-flex flex-center h-100vh">
      <div className='d-inline-block padding-1'>
        <h3 className='text-center'>登入</h3>
        <p>製作簡易版本登入，比較react redux 與 react auto kit 功能</p>
        <p>作品參考請至 Github 查詢</p>
      </div>
      <div className='card d-inline-block'>
        <form className=''>
          <div>
            <button type='button' onClick={() => dispatch(increment())}>Increment</button>
            <span>{name}</span>
            <span>{count}</span>
            <button type='button' onClick={() => dispatch(decrement())}>Decrement</button>
          </div>

          <div>
            <label>User</label>
            <input type='text' placeholder='User'></input>
          </div>
          <div>
            <label>pass</label>
            <input type='password' placeholder='password'></input>
          </div>
          <div>
            <button type='submit'>Sign in</button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
