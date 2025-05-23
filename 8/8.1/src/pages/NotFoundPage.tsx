import { Button } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { useNavigate } from 'react-router';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Not Found Page</h1>
      <p>This page does not exist.</p>
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
      >
        <ArrowBackIosNew />
        Outlined
      </Button>
    </div>
  );
}
