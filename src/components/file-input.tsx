import { Button, Input } from '@mui/material';

export const FileInput = () => {
  return (
    <Button variant="contained" component="label">
      <Input type="file" name="file-upload"></Input>;
    </Button>
  );
};
