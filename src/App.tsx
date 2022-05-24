import React from 'react'
import Router from './routes';
import WaterMark from './components/watermark';
import './App.css'

interface AppProps {

}

interface AppState {

}

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <>
        {/* <WaterMark /> */}
        <Router />
      </>
    );
  }
}

export default App;
