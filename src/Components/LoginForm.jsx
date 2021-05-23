import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleSubmit = async (e) => { //On demande à l'utilisateur de saisir le login et le mot de passe, puis on demande à chatEngine
      // de renvoyer les messages. Si ça marche, l'utilisateur est connecté, sinon on lui demande de réessayer.
      e.preventDefault();
  
      const authObject = { 'Project-ID': "441f998d-3007-4376-9c8c-37dfcce96deb", 'User-Name': username, 'User-Secret': password };
  
      try {
        await axios.get('https://api.chatengine.io/chats', { headers: authObject });
  
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
  
        window.location.reload();
        setError('');
        
      } catch (err) {
        setError('Oops, incorrect credentials.');
      }
      
    };
  
    //Revoyer le formulaire de connexion
    return (
      <div className="wrapper">
        <div className="form">
          <h1 className="title">Chat Application</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
            <div align="center">
              <button type="submit" className="button">
                <span>Start chatting</span>
              </button>
            </div>
          </form>
          <h1>{error}</h1>
        </div>
      </div>
  
    );
  };
export default LoginForm;