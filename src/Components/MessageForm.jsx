import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {



  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  // Méthode pour modifier l'état de "value" dans input;
  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  //Méthode pour lancer un message
  const handleSubmit = (event) => {
    event.preventDefault(); // Pour être sûr que le navigateur ne rafraichisse pas la page une fois qu'on lance le message

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  //Méthode pour rechercher une image
  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}> 
      
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
        
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
      
    </form>
  );
};

export default MessageForm;
