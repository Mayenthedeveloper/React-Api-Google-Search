import React, {Component} from 'react';
import Types from '../Types/Types';
import './Searchtype.css';
import DisplayResults from '../DisplayResults/DisplayResults';


var resulthtml = "";
class Searchtype extends Component {
    constructor(props){
        super(props)
        this.state ={
            result:  '',
            apiKey:'&key=AIzaSyAgFMFqrzredrINSo_tbOwOYh7ix088w-o',
            url: 'https://www.googleapis.com/books/v1/volumes?q=',
            searchTerm : "",
            print: "all",
            filter: "",
            receivedResponse: false
      };


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
        if(this.state.filter == "")
            var apiUrl = this.state.url + this.state.searchTerm + "&printType=" + this.state.print + this.state.apiKey;
        else
            var apiUrl = this.state.url + this.state.searchTerm + "&filter=" + this.state.filter +  "&printType=" + this.state.print + this.state.apiKey;
        
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
                result: data.items,
                receivedResponse: true
            });
            this.setHTML();
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
            <Types 
                searchTerm={this.state.searchTerm}
                print={this.state.print}
                filter={this.state.filter}
                handleFilterChange={this.handleSearchChange}
                handlePrintChange={this.handlePrintChange}
                handleSearchChange={this.handleSearchChange}
                queryResults={this.queryResults}
            />
           
           {this.state.receivedResponse && <DisplayResults result={this.state.result} />}
        </div>
       
    )
    }
}

export default Searchtype;

