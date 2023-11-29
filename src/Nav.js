
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Nav from './Nav.css'

import Domains from './pages/Domains';
import WebHosting from './pages/webhosting';
import DedicatedServers from './pages/DedicatedServers';
import VirtualCloudServers from './pages/VirtualCloudServers';
import WordPressHosting from './pages/WordPressHosting';
import EmailHosting from './pages/EmailHosting';
import VPSHostingServers from './pages/VPSHostingServers';
import FreeHosting from './pages/FreeHosting';

const Navbar = () => {
	return (
    
		<Tabs>
      <div className='navbar'>
      <div className='nav-links'>
			<TabList>
				<Tab>Domains</Tab>
				<Tab>Web Hosting</Tab>
				<Tab>Dedicated Servers</Tab>
				<Tab>Virtual Cloud Servers</Tab>
				<Tab>Word Press Hosting</Tab>
				<Tab>Email Hosting</Tab>
				<Tab>VPS Hosting Servers</Tab>
				<Tab>Free Hosting</Tab>
			</TabList>
      </div>
      </div>
			<TabPanel>
				<Domains />
			</TabPanel>
			<TabPanel>
				<WebHosting />
			</TabPanel>
			<TabPanel>
				<DedicatedServers />
			</TabPanel>
			<TabPanel>
				<VirtualCloudServers />
			</TabPanel>
			<TabPanel>
				<WordPressHosting />
			</TabPanel>
			<TabPanel>
				<EmailHosting />
			</TabPanel>
			<TabPanel>
				<VPSHostingServers />
			</TabPanel>
			<TabPanel>
				<FreeHosting />
			</TabPanel>
		</Tabs>

	);
};

export default Navbar;
