 const editorConfig = {
    readonly: false, 
    toolbarSticky: false,
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'outdent', 'indent', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'link', 'image', '|', // Add the 'image' button here
      'align', 'undo', 'redo', '|',
      'hr', 'eraser', 'fullsize'
    ],
    style: {
      'list-style-type': 'disc', 
    },
    uploader: {
      insertImageAsBase64URI: true // Option to upload images as base64
    }
  };

  export default editorConfig;


  export const minutesToSeconds = (minutes) => {
    return minutes * 60;
}
