import React, {Component} from 'react';
import './Searchtype.css';

class Searchtype extends Component {

    constructor(props){
        super(props)
        this.state ={
            result:  '',
            apiKey:'&key=AIzaSyAgFMFqrzredrINSo_tbOwOYh7ix088w-o',
            url: 'https://www.googleapis.com/books/v1/volumes?q=',
            searchTerm : "",
            print: "",
            filter: ""
      };

      console.log("Value of print: " + this.state.print)

      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handlePrintChange = this.handlePrintChange.bind(this);
      this.handleFilterChange = this.handleFilterChange.bind(this);
      this.queryResults = this.queryResults.bind(this);
    }

    handleSearchChange = function (event)
    {
        this.setState({searchTerm : event.target.value})
       
    }

    handlePrintChange = function (event)
    {
        this.setState({print : event.target.value});
    }

    handleFilterChange = function (event)
    {
        this.setState({filter : event.target.value})
    }

    queryResults = function ( search, print, filter)  
    {
        console.log("Value of print: " + this.state.print)
        const apiUrl =`${this.state.url}${search}&filter=${filter}&printType=${print}${this.state.apiKey}`
        console.log(apiUrl)
        //https://www.googleapis.com/books/v1/volumes?q=undefined&filter=undefined&printType=undefined&key=AIzaSyAgFMFqrzredrINSo_tbOwOYh7ix088w-o"
        
       fetch(apiUrl)
            .then(response =>  {
            if(!response.ok){
                throw new Error('Something went  wrong');
            }
            return response;
            })
            .then(response => response.json())
            .then(data  => {
            console.log(data)
            this.setState({
            results: data,
            });
        
            })
            .catch(error =>  {
            this.setState({
                error: error.message
            })
            })
       
    }

    render(){
    return(
        <div>
           <form className='searchform'>
               <label> Search</label>
               <input type="text" name='searchbook' id='searchbook' placeholder='henry' value= {this.state.searchTerm} onChange={this.handleSearchChange}></input>
                <button type="button" onClick={()=>this.queryResults(this.state.searchTerm, this.state.print, this.state.filter)}>
                    Search
                </button>
                <br />
                <label>Print Type</label>
                    <select id='print' name='print' onChange={this.handlePrintChange}>
                        <option value='all'> All</option>
                        <option value='books'> Books</option>
                        <option value='magazines'> Magazines</option>
                    </select>
                    <label>Book Type</label>
                    <select id='price' name='price' onChange={this.handleFilterChange}>
                        <option value='full'>no filter</option>
                        <option value='free-ebooks'> free</option>
                        <option value='paid-ebooks'> paid</option>
                    </select>
           </form>
        </div>
    )
    }
}

export default Searchtype;

