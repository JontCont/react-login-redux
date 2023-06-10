import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/counter/counterSlice'
import React, { useState } from 'react';
import { loginSuccess } from './store/auth/authSlice';
import './App.css';

function App() {
  //initial value 
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const user = { id: 1, username: 'exampleuser' };
    dispatch(loginSuccess(user));
    // console.log({
    //   username : username,
    //   password : password,
    //   setInfo : {setUsername , setPassword}
    // });
    // return false;
  }

  return (
    <div className="d-flex flex-center h-100vh">
      <div className='d-inline-block padding-1'>
        <h3 className='text-center'>登入</h3>
        <p>製作簡易版本登入，比較react redux 與 react auto kit 功能</p>
        <p>作品參考請至 Github 查詢</p>
      </div>
      <div className='card d-inline-block'>
        <form className='' onSubmit={handleSubmit}> 
          <div>
            <label>User</label>
            <input type='text' 
              placeholder='User'
              value={username}
              onChange={(e) => setUsername(e.target.value)}>
          </input>
          </div>
          <div>
            <label>pass</label>
            <input type='password' 
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ></input>
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
