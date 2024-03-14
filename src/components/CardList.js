import React from "react";
import Card from './Card';
const CardList = ({ robots }) => {
    console.log('CardList')
    return (
        <div className=''>
            { 
                robots.map((x, i) => {
                    return <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}

                    />
                })
            
  
            }
        </div>
    )
}

export default CardList;