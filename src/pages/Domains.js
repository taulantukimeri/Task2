import React from 'react'
import './Domains.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Domains() {
  const cardData = [
    {
      title: '.COM',
      price: '$5.99/yr',
      description: 'Instead of $10.99/yr',
      button:'Buy Now'
    },

    {
      title: '.AI',
      price: '$5.99/yr',
      description: 'Instead of $10.99/yr',
      button:'Buy Now'
    },

    {
      title: '.NET',
      price: '$5.99/yr',
      description: 'Instead of $10.99/yr',
      button:'Buy Now'
    },

    {
        title: '.HEALTH',
        price: '$5.99/yr',
        description: 'Instead of $10.99/yr',
        button:'Buy Now'
      },
          
    {
        title: '.CO.UK',
        price: '$5.99/yr',
        description: 'Instead of $10.99/yr',
        button:'Buy Now'
      },  

      {
          title: '.ORG',
          price: '$5.99/yr',
          description: 'Instead of $10.99/yr',
          button:'Buy Now'
        },

            
    {
        title: '.CO',
        price: '$5.99/yr',
        description: 'Instead of $10.99/yr',
        button:'Buy Now'
      },
          
    {
        title: '.SEA',
        price: '$5.99/yr',
        description: 'Instead of $10.99/yr',
        button:'Buy Now'
      },

  ];

  return (
    <Tabs>
        <TabPanel>
            <div className='cards'>
      {cardData.map((card, index) => (
          <div key={index}>
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

export default Domains;