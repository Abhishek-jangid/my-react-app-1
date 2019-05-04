import React from 'react';
import Child from './child';

const Parent = (props) => {
      return(
            <Child {...props}/>
      )
}

export default Parent;
