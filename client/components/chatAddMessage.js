import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/chatActions.js';

let AddChatMessage = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMessage(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Your Message
        </button>
      </form>
    </div>
  )
}
AddChatMessage = connect()(AddChatMessage)

export default AddChatMessage;
