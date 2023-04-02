import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16 ,
  border:"1px solid red"
};

const thumb = {
  display: 'block',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  flexDirection:'Column',
  alignItems:"center",
  width:"500px",
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: '100%',
  height: '100%'
};


function uploadToCloudinary(file){
  const formData = new FormData()  
  formData.append('file',file)
  formData.append('upload_preset',"gqgmqyy3")
  formData.append('timestamp',(Date.now()/1000))
  formData.append('api_key',342141414412886)

  fetch('https://api.cloudinary.com/v1_1/dktxh8rv7/video/upload', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}


export function Previews(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': [],
      'video/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      uploadToCloudinary(acceptedFiles[0])
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
        <video src={file.preview} 
        style={img} 
        controls 
        onLoad={() => { URL.revokeObjectURL(file.preview) }}></video>
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

