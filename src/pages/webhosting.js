import React from 'react'
import './Domains.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function webhosting() {
  const cardData = [
    {
      title: 'ChatGPT',
      price: '$4.99/yr',
      description: 'Instead of $10.99/yr',
      button:'Buy Now'
    },

    {
      title: 'Facebook',
      price: '$2.99/yr',
      description: 'Instead of $10.99/yr',
      button:'Buy Now'
    },

    {
      title: 'X',
      price: '$7.99/yr',
      description: 'Instead of $10.99/yr',
      button:'Buy Now'
    },

    {
        title: 'Twitch',
        price: '$4.99/yr',
        description: 'Instead of $10.99/yr',
        button:'Buy Now'
      },
          
    {
        title: 'Reddit',
        price: '$1.99/yr',
        description: 'Instead of $10.99/yr',
        button:'Buy Now'
      },  

      {
          title: 'Youtube',
          price: '$10.99/yr',
          description: 'Instead of $10.99/yr',
          button:'Buy Now'
        },

            
    {
        title: 'Game Center',
        price: '$5.99/yr',
        description: 'Instead of $10.99/yr',
        button:'Buy Now'
      },
          
    {
        title: 'Iphone',
        price: '$5.99/mnth',
        description: 'Instead of $10.99/mnth',
        button:'Buy Now'
      },

  ];

  return (
    <Tabs>
        <TabPanel>
            <div className='cards'>
      {cardData.map((card, index) => (
          <div key={index} className='card'>
            <div className="card">
              <h2>{card.title}</h2>
              <div className='text'>
              <h3>{card.price}</h3>
              <p>{card.description}</p>
              <button className='button'>{card.button}</button>
              </div>
            </div>
          </div>
      ))}
      </div>
        </TabPanel>
    </Tabs>
  );
};

export default webhosting;