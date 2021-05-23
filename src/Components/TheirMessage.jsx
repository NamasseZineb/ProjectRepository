const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  // "isFirstMessageByuser" est égal à ( si ce n'est pas le dernier message ou si le dernier message envoyé par l'utilisateur est
  // différent du message actuel envoyé par l'utilisateur )
  return (
    <div className="message-row">
      {isFirstMessageByUser && (//Si on a le premier message de l'utilistateur
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      )}
      {message.attachments && message.attachments.length > 0
        ? ( //Si le message est une image
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        //Si le message est un texte
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
        )}
    </div>
  );
};

export default TheirMessage;
