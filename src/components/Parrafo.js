import React from 'react';
import './css/parrafo.css';
function parrafo() {
  return(
    <div className='parrafo'>
        <p>
        at createFiberFromTypeAndProps (http://localhost:3000/static/js/bundle.js:30498:21)
        at createFiberFromElement (http://localhost:3000/static/js/bundle.js:30519:19)
        at createChild (http://localhost:3000/static/js/bundle.js:17591:32)
        at reconcileChildrenArray (http://localhost:3000/static/js/bundle.js:17831:29)
        at reconcileChildFibers (http://localhost:3000/static/js/bundle.js:18173:20)
        at reconcileChildren (http://localhost:3000/static/js/bundle.js:22600:32)
        at updateHostComponent (http://localhost:3000/static/js/bundle.js:23244:7)
        at beginWork (http://localhost:3000/static/js/bundle.js:24696:18)
        at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:9654:18)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:9698:20)
        este texto no tiene significado simplemente se tomo como ejemplo
        </p>
    </div>
  ); 
}

export default parrafo;
