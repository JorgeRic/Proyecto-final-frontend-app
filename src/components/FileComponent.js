import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
 
class FileUploadComponent extends Component {
  state = {
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };
 
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });

  handleProgress = progress => this.setState({ progress });

  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        console.log(url);
        this.setState({ avatarURL: url });
        // En este punto tenemos la url de la imagen.
        // Hay que pasarla al componente superior para que actualice el state
        // antes de hacer el 'push'.
        this.props.onUploadFinished(url);
      });

    console.log('url:', this.state.avatarURL);
  };

  
 
  render() {
    const {isUploading, progress, avatarURL} = this.state;
    return (
      <div >
        <label className='datos-creacion'>Subir imagen:</label>
        {isUploading && <p>Progress: {progress}</p>}
        {avatarURL && <img src={avatarURL} alt='name'/>}
        <FileUploader className="center-input"
          accept="image/*"
          name="image"
          randomizeFilename
          storageRef={firebase.storage().ref("images")}
          onUploadStart={this.handleUploadStart}
          onUploadError={this.handleUploadError}
          onUploadSuccess={this.handleUploadSuccess}
          onProgress={this.handleProgress}
        />
      </div>
    );
  }
}
 
export default FileUploadComponent;