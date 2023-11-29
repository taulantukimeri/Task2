import logo from './logo.svg';
import './App.css';
import Domains from './pages/Domains'
import webhosting from './pages/webhosting'
import DedicatedServers from './pages/DedicatedServers'
import VirtualCloudServers from './pages/VirtualCloudServers'
import WordPressHosting from './pages/WordPressHosting'
import EmailHosting from './pages/EmailHosting'
import VPSHostingServers from './pages/VPSHostingServers'
import FreeHosting from './pages/FreeHosting'
import Nav from './Nav'
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch,} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route  path="/Domains" element={<Domains />} />
          <Route path="/webhosting" element={<webhosting />} />
          <Route path="/DedicatedServers" element={<DedicatedServers />} />
          <Route path="/VirtualCloudServers" element={<VirtualCloudServers />} />
          <Route path="/WordPressHosting" element={<WordPressHosting />} />
          <Route path="/EmailHosting" element={<EmailHosting />} />
          <Route path="/VPSHostingServers" element={<VPSHostingServers />} />
          <Route path="/FreeHosting" element={<FreeHosting />} />
        </Switch>
        </div>
    </Router>
  );
}

export default App;
