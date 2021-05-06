import { ChatEngine } from 'react-chat-engine';
import './App.css';
import LoginForm from './Components/LoginForm';
import ChatFeed from './Components/ChatFeed';
const App = () => {
  //Si l'utilisateur n'est pas enregistré
    if (!localStorage.getItem('username')) return <LoginForm />;
  //Sinon
  return (
    <ChatEngine
      height="100vh"
      projectID="441f998d-3007-4376-9c8c-37dfcce96deb"
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}
export default App;