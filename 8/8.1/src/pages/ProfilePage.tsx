import { Typography, Container } from '@mui/material';
import { useAuth } from '../providers/context/useAuth';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { AdminInfo } from '../components/AdminInfo';
import { isAdmin } from '../utils/rbac';

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, loading, navigate]);

  if (loading) return <p>Check auth...</p>;

  return (
    <div>
      <Container>
        <Typography variant="h4">Profile Page</Typography>
        <Typography>User name: {user.name}</Typography>
        {isAdmin(user) && <AdminInfo />}
      </Container>
    </div>
  );
}
