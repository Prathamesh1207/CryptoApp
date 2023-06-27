import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import { makeStyles } from '@mui/styles';
// import { colors } from '@mui/material';

// import { createTheme, ThemeProvider } from '@mui/material/styles';



function App() {

  const useStyles=makeStyles({
    App:{
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh'
    },
  });
  const classes=useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" Component={Homepage} />
          // <Route path="/coins/:id" Component={Coinpage} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
