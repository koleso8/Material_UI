import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BasicPagination from './components/BasicPagination';

const App = () => {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography mr={'auto'} variant="h6">
            Material UI
          </Typography>
          <Box mr={4}>
            <Button color="inherit" variant="outlined">
              Log In
            </Button>
          </Box>
          <Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <BasicPagination />
    </AppBar>
  );
};

export default App;
