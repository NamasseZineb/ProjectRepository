import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

import React from 'react';
const ChatFeed = (props) => {
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat]; //"chat" est égal à "chat[le chat actuel]" si "chats" existe

    //Méthode pour vérifier si le destinataire a lu le message
    const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
          key={`read_${index}`}
          className="read-receipt"
          style={{
            float: isMyMessage ? 'right' : 'left',
            backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
          }}
        />
      ));

    //Méthode pour générer les messages
    const renderMessages = () => {
        const keys = Object.keys(messages); //"keys" affiche les id des différents messages
        return keys.map((key,index)=>{  
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.userName;

            // Si c'est bien l'utilisateur qui a envoyé un message la fonction retourne les messages de l'utilisateur connecté sinon, ceux des autres utilisateurs
        return (
            <div>
                <div key={`msg_${index}`} style={{ width: '100%' }}>
                    {isMyMessage
                    ? <MyMessage message={message} /> 
                    : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />
                    }
                </div>
                <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
                    {renderReadReceipts(message,MyMessage)}
                </div>
            </div>
          );
        })
              
      }
      if (!chat) return "Loading...";
      
    renderMessages();
    return(// le "?" à la ligne 40 signifie que l'on a bien le chat avant d'accéder à la variable du titre 
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat?.title}</div> 
                    <div className="chat-subtitle">
                        {chat.people.map((person) => ` ${person.person.username}`)}
                    </div>
            </div>
            {renderMessages()}
            <div style={{ height: '100px' }} />
                <div className="message-form-container">
                    <MessageForm {...props} chatId={activeChat} />
                </div>
        </div>
    )
  };
  
  export default ChatFeed;
  