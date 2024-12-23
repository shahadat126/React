import React from 'react';


const Index2 = (props) => {
    const fullDate = new Date();
  const date =
    fullDate.getDate() +
    "/" +
    fullDate.getMonth() +
    "/" +
    fullDate.getFullYear();
    return (
        <div className='card-style'>
            <h1>{props.titleText}</h1>            
            <h1>{props.descText}</h1>            
            <h1>{date}</h1>            
        </div>
    );
};

export default Index2;