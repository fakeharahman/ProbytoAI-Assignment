// import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Weather from './containers/Weather/Weather';

function App() {
  const theme = createMuiTheme({ 
    palette: {
        primary: {
            main: '#6a62d2',
          },
    },
   
});
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Route path='/weather' component={Weather} />
      <Route path='/' exact component={Login} />
    </div>
    </ThemeProvider>
  );
}

export default App;
