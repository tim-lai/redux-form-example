import { connect } from 'react-redux';
import ChatMessageList from '../components/ChatMessageList';

const getChatMessages = (messages) => {
  return messages;
}

const mapStateToProps = (state) => {
  return {
    messages: getChatMessages(state.messages)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     }
//   }
// }

const ChatMessageView = connect(
  mapStateToProps
)(ChatMessageList)

export default ChatMessageView;
