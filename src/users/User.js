import React from 'react';

const User = (props) => {
      let age = props.age ? props.age : 'NA';
      let sex = props.sex ? props.sex : 'T';
      if (props.children){
            return (
                  <div>
                  Name: {props.children} | Age: {age} | Sex : {sex}
                  </div>
            );
      }else{
            return(
            <div>Invalid Entry</div>
            );
      }
}

export default User;
