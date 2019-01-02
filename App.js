import React from 'react'
import Landing from "./components/Landing.js"
import { NativeRouter, Route } from "react-router-native"
import { Container } from "native-base"
import SignUp from "./components/SignUp.js"
import Home from "./components/Home.js"
import Connections from "./components/Connections.js"
import Search from "./components/Search.js"

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <Container styles={{height: "100%", width: "100%"}}>
          <Route path="/" exact component={Landing}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/home" component={Home}/>
          <Route path="/connections" component={Connections}/>
          <Route path="/search" component={Search}/>
        </Container>
      </NativeRouter>
    );
  }
}
