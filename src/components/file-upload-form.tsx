import { FileInput } from './file-input';

function FileUploadForm() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <form onSubmit={handleSubmit}>
      <FileInput></FileInput>
    </form>
  );
}

export default FileUploadForm;
