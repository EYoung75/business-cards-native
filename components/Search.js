import React from "react"
import { Container, Header, H1, Content, Item, Input, Icon, Button, Text } from "native-base"
import Heading from "./Heading.js"
import Footing from "./Footing.js"

const Search = () => {
    return (
        <Container style={{flex: 1}}>
            <Heading/>
            <Container style={{alignItems: "center"}}>
                <Content style={{width: "100%"}}>
                    <Header searchBar rounded>
                        <Item style={{height: 40}}>
                            <Icon name="search"/>
                            <Input placeholder="Search for a person"/>
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>
                </Content>
            </Container>
            <Footing/>
        </Container>
    )
}

export default Search