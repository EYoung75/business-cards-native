import React from "react"
import { Container, H1, Header, Content, Form, Item, Input, Label, Text, Button } from "native-base"

class SignUp extends React.Component{
    render(){
        return (
            <Container style={{width: "100%"}}>
            <Header>
                <H1>Create an Account</H1>
            </Header>
            <Content>
            <Form>
                <Item floatingLabel>
                    <Label>Username:</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Password:</Label>
                    <Input />
                </Item>
                <Item floatingLabel>
                    <Label>Email:</Label>
                </Item>
            </Form>
            </Content>
        </Container>
        )
    }
}

export default SignUp