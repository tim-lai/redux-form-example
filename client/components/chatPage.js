import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import userLoginApp from '../reducers/reducers.js';
// import Chat from './chat.js';
import ChatMessageView from './chatMessageView.js';
import AddChatMessage from './chatAddMessage.js';
import Dropzone from 'react-dropzone';

class ChatPage extends Component {
  
    /*
  getInitialState: function() {
    return {
     files:[]
    };
  }
    */
  

  onDrop(files) {
      console.log('Received files: ', files);
      // this.setState({
      //   files: files
      // });
    }

  /*
  showFiles() {
    var files = this.state || null;
    console.log('files',files);

    if (!files.length) {
        return null;
    }

    return (
        <div>
            <h3>Dropped files: </h3>
            <ul className="col-md-4">
                {
                    files.map((file, idx) => {
                        return (
                            <li key={idx}>
                                <img src={file.preview} width={100}/>
                                <div>{file.name + ' : ' + file.size + ' bytes.'}</div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
  }  
  */

  render() {
    return (
      <div className="container profile-page">
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row row-spacer"></div>
        <div className="row">
          <div className="col-sm-1 col-md-3"></div>
          <div className="col-sm-10 col-md-6">
            <span><div className="profile-slogan">Welcome to the Chat Room Page</div></span>
            <div id="chatroom">
              <ChatMessageView />
              <AddChatMessage />
            </div>

            <div id="addfiles">
              <label>Files</label>
              <div>
                <Dropzone
                  onDrop={ this.onDrop }
                >
                <div>Try dropping some files here, or click to select files to upload.</div>
                <div>Note: you can see files successfully uploaded in the console. </div>
                </Dropzone>
                {
                //this.showFiles()
                }
                {
                  /*
                {this.state.files ? <div>
                  <h2>Uploading {files.length} files...</h2>
                  <div>this.state.files.map((file) => <img src={file.preview} />)</div>
                  </div> : null}

                  */
                } 
              </div>
            </div>

          </div>
          <div className="col-sm-1 col-md-3"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
          <div className="row row-spacer"></div>
        </div>
      </div>
    );
  }

}

ChatPage.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect()(ChatPage);