import React from 'react';
import Cards from '../Cards/Cards';

const Cardlist =({robots})=>{
    const cardArr = robots.map((user,i)=>{
       return <Cards id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    });
    
    return (
        <div>
            {cardArr}
        </div>
    )
}
export default Cardlist;