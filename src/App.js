import React, {Component} from "react";
import './App.css';

import Card from 'react-bootstrap/Card';


class App extends Component {
  constructor() {
    super()
    this.state={
      data: []
    }
  }

    componentDidMount(){
      fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response
        })
      })
    }

    render() {
      return (
        <div>


   {this.state.data.map((value,key) => ( 
   <Card className="card">
    
    <Card.Body>
      <Card.Title>
         <h1>Hackathon</h1>
         </Card.Title>
      <Card.Text>
       <h2>Title: {value.title}
       <br></br>
         Description: {value.description}
         <br></br>
         Director: {value.director}
         <br></br>
         Producer: {value.producer}
         <br></br>
         Release Date: {value.release_date}
         <br></br>
         Rt Score: {value.rt_score}
         </h2>
        
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
    </Card>




))}

    </div>

      );
   }
  }


export default App;