import React from "react"
import { Container, Header, H1, Content } from "native-base"
import Heading from "./Heading.js"
import Footing from "./Footing.js"

const Connections = () => {
    return (
        <Container style={{flex: 1}}>
            <Heading/>
            <Content>
                <H1>Connections</H1>
            </Content>
            <Footing/>
        </Container>
    )
}

export default Connections