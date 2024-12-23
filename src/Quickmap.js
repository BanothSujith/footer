import React from 'react'
import Links from './links'
import QuickLinks from './components/QuickLinks'

function Quickmap() {
  return (
    <div>
        <h2>QuickLinks</h2>

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

export default Quickmap