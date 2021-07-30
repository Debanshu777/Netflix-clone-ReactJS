import React from 'react';
import JumboCards from './containers/jumboCards';

export default function Jumbotron(props){
    const jumboData= props.jumboData
    return(
        jumboData.map(item => 
            <JumboCards direction={item.direction} data = {item}/>
        )
    );
}