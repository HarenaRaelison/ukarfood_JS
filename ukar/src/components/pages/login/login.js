
import React, { useState } from 'react';
import './App.css';
import DashBoard from './components/dashBoard'
import axios from 'axios' ; 



const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLog , setIsLog] = useState(false)

  const handleEmailChange = (e) => setName(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/login', {
        Name: name,
        Password: password
      } );
      if (response.status === 200) {
        setIsLog(true)
        console.log('Login successful:', response.data);

      } else {
        console.error('Login failed:', response.data);
      }
    } catch (err) {
    
      console.error('Request error:', err);
    }
  };


  return (
    
    <div className="App" >
    
      
              <form onSubmit={handleSubmit}>
                  <h1>Login</h1>
                    <table>
                      <tr>
                        <td>
                          <label>
                            Email:
                          </label>
                        </td>
                        <td>
                          <input type="text" value={name} onChange={handleEmailChange} />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>
                            Password:
                          </label>
                        </td>
                        <td>
                          <input type="password" value={password} onChange={handlePasswordChange} />  
                        </td>
                      </tr>
                    </table>
                    <button type="submit">Login</button>
            </form>
      
     
      
    </div>
  );
};

export default Login;
