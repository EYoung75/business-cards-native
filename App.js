import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Landing from "./components/Landing.js"
import { NativeRouter, Route } from "react-router-native"
import SignUp from "./components/SignUp.js"

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route path="/" exact component={Landing}/>
          <Route path="/signUp" component={SignUp}/>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
