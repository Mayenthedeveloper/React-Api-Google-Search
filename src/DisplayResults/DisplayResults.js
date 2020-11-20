import React from 'react';
import ListItems from '../ListItems/ListItems';

function DisplayResults(props){
    return(
        props.result.map(result => (
            <div>
                <ListItems 
                    volumeInfo={result.volumeInfo}
                    saleInfo={result.saleInfo}
                />
            </div>
            
        ))
    )
}

export default DisplayResults;
