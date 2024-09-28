import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Skeleton,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BasicPagination from './components/BasicPagination';

const App = () => {
  return (
    <div>
      <AppBar position="fixed">
        <Container>
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
        {/* <BasicPagination /> */}
      </AppBar>
      {(
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSri6L0rymvKYkambxYKvPYzIcLtFlsZxYzUw&s"
          alt=""
        />
      ) && <Skeleton variant="rectangular" width={210} height={218} />}
    </div>
  );
};

export default App;
