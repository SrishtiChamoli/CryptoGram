import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {Provider} from 'react-redux';
import store from './app/store';

import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
  </Router>
);