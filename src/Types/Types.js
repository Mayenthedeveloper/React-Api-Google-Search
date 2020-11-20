import React, { Component } from "react";
import './Types.css';

function Types(props) {
    
        return(
            <div>
                 <form className='searchform'>
               <label className="searchTab"> Search</label>
               <input type="text" name='searchbook' id='searchbook' placeholder='henry' value= {props.searchTerm} onChange={props.handleSearchChange}></input>
                <button type="button" onClick={()=>props.queryResults(props.searchTerm, props.print, props.filter)}>
                    Search
                </button>
                <br />
                <div className='printType'>
                <label>Print Type</label>
                    <select id='print' name='print' onChange={props.handlePrintChange}>
                        <option value='all'> All</option>
                        <option value='books'> Books</option>
                        <option value='magazines'> Magazines</option>
                    </select>
                    <label>Book Type</label>
                    <select id='price' name='price' onChange={props.handleFilterChange}>
                        <option value='full'>no filter</option>
                        <option value='free-ebooks'> free</option>
                        <option value='paid-ebooks'> paid</option>
                    </select>
                    </div>
           </form>
            </div>
        )
    }


export default Types;