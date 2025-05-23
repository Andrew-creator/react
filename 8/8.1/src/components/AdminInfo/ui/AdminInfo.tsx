import { Box, Typography, useTheme } from '@mui/material';

export const AdminInfo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.warning.light,
        color: theme.palette.getContrastText(theme.palette.warning.light),
        p: 2,
        mt: 2,
        borderRadius: 1,
      }}
    >
      <Typography variant="body1">
        👑 Вы вошли как <strong>администратор</strong>.
      </Typography>
    </Box>
  );
};
