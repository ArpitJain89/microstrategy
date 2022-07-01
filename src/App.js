import logo from './logo.svg';
import Home from './homePage/home';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './Keycloak'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Home />
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
