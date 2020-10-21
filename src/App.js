import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import { Provider } from "react-redux";
import store from "./store";
import MainView from './components/MainView';



function App() {
  return (
    <Provider store={store}>
      <MainView/>
    </Provider>
  );
}

export default App;
