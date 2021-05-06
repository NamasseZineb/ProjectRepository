import {useState} from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm=(props)=> {
    const [value, setValue] = useState(''); //Avant d'envoyer quoi que ce soit, le message est vide
    const { chatId, creds } = props;

    //Méthode pour modifier le message
    const handleChange = (event) => {
        setValue(event.target.value);

        isTyping(props, chatId);
      };
    
      //Méthode qui permet d'envoyer un message avec Entrer ou sur le bouton;
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const text = value.trim();
    
        if (text.length > 0) {
          sendMessage(creds, chatId, { text });
        }
    
        setValue('');
      };

      //Méthode pour envoyer une image
      const handleUpload = (event) => {
        sendMessage(creds, chatId, { files: event.target.files, text: '' });
      };
    return (
        <form>
            <input //Envoi d'un message
                className="message-input" 
                placeholder="Send a message..."
                value={value}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <label //Icône pour le bouton image
             htmlFor="upload-button" > 
                <span className="image-button">
                    <PictureOutlined className="picture-icon" />
                </span>
            </label>
            <input //Pour importer une image
                type="file"
                multiple={false}
                id="upload-button"
                style={{ display: 'none' }}
                onChange={handleUpload.bind(this)}
            />
        </form>
    )
}

export default MessageForm;

