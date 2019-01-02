import React from "react"
import { Container, Header, H1, Content } from "native-base"
import Heading from "./Heading.js"
import Footing from "./Footing.js"

const Search = () => {
    return (
        <Container style={{flex: 1, alignItems: "center"}}>
            <Heading/>
            <Content>
                <H1>Search</H1>
            </Content>
            <Footing/>
        </Container>
    )
}

export default Search