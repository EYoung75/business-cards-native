import React from "react"
import { Container, H1, Header, Content, Form, Item, Input, Label, Text, Button } from "native-base"

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            username: "",
            password: "",
            email: ""
        }
    }
    render(){

        handleInput = (e) => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            })
        }
        return (
            <Container style={{width: "100%"}}>
            <Header>
                <H1>Create an Account</H1>
            </Header>
            <Content>
            <Form>
                <Item floatingLabel>
                    <Label>Username:</Label>
                    <Input name="username" onChange={this.handleInput}/>
                </Item>
                <Item floatingLabel>
                    <Label>Password:</Label>
                    <Input name="password" onChange={this.handleInput}/>
                </Item>
                <Item floatingLabel>
                    <Label>Email:</Label>
                    <Input name="email" onChange={this.handleInput}/>
                </Item>
                <Button success style={{width: "80%", alignSelf: "center", marginTop: 25, justifyContent: "center"}}>
                    <Text>Submit</Text>
                </Button>
            </Form>
            </Content>
        </Container>
        )
    }
}

export default SignUp