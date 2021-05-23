import React from 'react';
import { ChatEngine} from 'react-chat-engine';

import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm';
import './App.css';

const projectID = "441f998d-3007-4376-9c8c-37dfcce96deb";
const userName="zineb";
const userSecret="mimi";

const App = () => {
  
  //Si l'utilisateur n'est pas enregistré on retourne la page login
  if (!localStorage.getItem('username')) return <LoginForm />;
  //Sinon, on retourne la taille du chat, l'id du projet, le nom de l'utilisateur, son mot de passe, le son de l'envoi d'un message et le render chatFeed
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      //userName={localStorage.getItem('userName')}
      userName={userName}
      //userSecret={localStorage.getItem('password')}
      userSecret={userSecret}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />} //
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
