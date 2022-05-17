import React from 'react'
import Router from './routes';
import './App.css'

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Router />
    );
  }
}

export default App;
