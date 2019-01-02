import React from "react"
import { Container, H2, Header, Content, Form, Item, Input, Label, Text, Button } from "native-base"
import { Link } from "react-router-native"
import Heading from "./Heading.js"

class Landing extends React.Component{
    constructor(){
        super()
        this.state = {
            username: "",
            password: ""
        }
    }
    render(){

        handleInput = (e) => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            })
        }
        return(
            <Container style={{height: "100%", width: "100%"}}>
                <Heading/>
                <Container style={{flex: 1, margin: 25}}>
                <H2>Login:</H2>
                <Content>
                    <Form style={{marginBottom: 30}}>
                        <Item floatingLabel>
                            <Label>Username:</Label>
                            <Input onChange={this.handleInput} name="username"/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password:</Label>
                            <Input onChange={this.handleInput} name="password" secureTextEntry={true}/>
                        </Item>
                        <Button success style={{flex: 1, alignSelf: "center", justifyContent: "center", width: "80%", marginTop: 20}}>
                            <Link to="/home">
                                <Text>Sign In</Text>
                            </Link>
                        </Button>
                    </Form>
                    <Text style={{alignSelf: "center", marginBottom: 30}}>Or</Text>
                    <Button style={{alignSelf: "center", width: "80%", justifyContent: "center"}}>
                        <Link to="/signUp">
                            <Text>Sign Up</Text>
                        </Link>
                    </Button>
                </Content>
                </Container>
            </Container>
        )
    }
}

export default Landing