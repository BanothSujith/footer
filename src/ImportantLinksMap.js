import React from 'react'
import Links from './links'
import QuickLinks from './components/QuickLinks';

function ImportantLinksMap() {
  return (
    <div>
        <h2>Important Links</h2>

        {
             Links.map((link,index) => (
                <div key={index}>
                
                <QuickLinks links={link}/>
                
                </div>
        ))
        }
    </div>
  )
}

export default ImportantLinksMap