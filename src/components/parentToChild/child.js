import React from 'react';

const Child = (props) => {
      return(
            <div>
                  <button onClick={props.doSomethingGrand}>{props.posp}</button>
                  <button onCick={props.doSomethingParent}>{props.titleParent}</button>
            </div>
      )
}

export default Child;
