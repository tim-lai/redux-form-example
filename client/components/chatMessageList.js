import React, { PropTypes } from 'react';
import ChatMessage from './chatMessage.js';

const ChatMessageList = ({ messages }) => (
  <ul>
    {messages.map(message =>
      <ChatMessage
        key={message.id}
        {...message}
      />
    )}
  </ul>
)

ChatMessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default ChatMessageList;
