import React, { PropTypes } from 'react';

const ChatMessage = ({id, text }) => (
  <li>
    {id}: 
    {text}
  </li>
)

ChatMessage.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default ChatMessage;
