import React from 'react';
import './QuickLinks.css';
function QuickLinks({links}) {
  return (
    <div className="quick-links">
        {
<a href={links.url}>{links.label}</a>
        }
        </div>
  )
}

export default QuickLinks