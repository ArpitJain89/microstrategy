import logo from './logo.svg';
import Home from './homePage/home';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './Keycloak'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import NewHomePage from './homePage/newHomePage';

function App() {
  return (
    <div className="App">
        <NewHomePage />
    </div>
  );
}

export default App;
