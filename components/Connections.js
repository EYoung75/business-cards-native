import React from "react"
import { Container, Header, H1, Content } from "native-base"
import Heading from "./Heading.js"
import Footing from "./Footing.js"

const Connections = () => {
    return (
        <Container style={{flex: 1, height: "100%"}}>
            <Heading/>
            <Container style={{alignItems: "center"}}>
                <Content>
                    <H1>Connections</H1>
                </Content>
            </Container>
            <Footing/>
        </Container>
    )
}

export default Connections