import React from 'react';
import  './ListItems.css';

function ListItems(props){
    return(
            <div className='listItems' key={props.id}>
                <img src= {props.volumeInfo.imageLinks && props.volumeInfo.imageLinks.thumbnail} /> 
                <div className='details'>
                <b>  {props.volumeInfo.title} </b>
                <p>  {props.saleInfo.retailPrice && props.saleInfo.retailPrice.amount} {props.saleInfo.retailPrice && props.saleInfo.retailPrice.currencyCode}</p>
                <p>  {props.volumeInfo.description}  </p>
                </div>
            </div>
        )
}

export default ListItems;
