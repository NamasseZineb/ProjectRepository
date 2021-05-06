import { useState } from 'react';
import axios from 'axios';

const LoginForm=()=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    //Méthode pour vérifier le username et le mot de passe de l'utilisateur
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const authObject = { 'Project-ID': "441f998d-3007-4376-9c8c-37dfcce96deb", 'User-Name': username, 'User-Secret': password };
    
        try {
            //L'utilisateur entre son username et mot de passe et demande à chatengine de lui renvoyer les messages
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });

          //Si ça marche, l'utilisateur peut accéder au chat
    
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
    
          window.location.reload();
          setError('');
        } catch (err) {
            //Si ça ne marche pas, on renvoie un message d'erreur
          setError('Oops, incorrect credentials.');
        }
      };

    return(
        //Formulaire de Login
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Let's Chat</h1>
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
} 
export default LoginForm;