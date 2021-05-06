import React from 'react'

const MyMessage=({message}) =>{
    //Vérifier si le message est un texte ou une image
    if (message.attachments && message.attachments.length > 0) //Si les message est une image 
    {
        return (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ float: 'right' }}
          />
        );
    }
    //Si le message est un texte
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    )
}

export default MyMessage;
