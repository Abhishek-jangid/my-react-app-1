import React from 'react';

const Child = (props) => {
      return(
            <div>
                  <button onClick={props.doSomethingGrand}>{props.title}</button>
                  <h1>{props.xyz}</h1>
            </div>
      )
}

export default Child;
