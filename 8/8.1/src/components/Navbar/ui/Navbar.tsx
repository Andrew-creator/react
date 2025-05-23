import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { useState } from 'react';
import { AuthForm } from '../../AuthForm';
import { useAuth } from '../../../providers/context/useAuth';
import { useNavigate } from 'react-router';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
          >
            Yandex OAuth Test Project
          </Typography>
          {isAuthenticated ? (
            <Button
              color="inherit"
              onClick={handleLogout}
            >
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => setOpen(true)}
            >
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Authorization</DialogTitle>
        <DialogContent>
          <AuthForm />
        </DialogContent>
      </Dialog>
    </>
  );
};
