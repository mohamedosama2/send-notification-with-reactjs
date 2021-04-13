import React, { Component } from "react";
import firebase from "./firebase";
import axios from 'axios'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title:"",
      body:"",
      token:""
    };
  }
  componentDidMount() {
    // console.log("here")
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("Token : ", token);
        this.setState({token})
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return <div>
    title:  <input type="text" onChange={(e)=>this.setState({title:e.target.value})} />
    body:  <input type="text" onChange={(e)=>this.setState({body:e.target.value})} />
    <button onClick={async()=>{
      if(this.state.token!==""){

        const res=await axios.post("http://localhost:8080/sendNotification",{
          title:this.state.title,
          body:this.state.body,
          deviceToken:this.state.token
        })
        console.log(res)
      }
    }}>Send</button>
    </div>;
  }
}
