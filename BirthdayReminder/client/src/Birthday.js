import React from 'react';



const Birthday = ({men}) => {


    return (
        <article className=''>
            
            <div>
                <img src={men.image} alt = {men.name} />
                <h4>{men.name}</h4>
                <h4> {men.info} </h4>
            </div>

        </article>
    )
}
export default Birthday;