import React from "react"
import { Container, Text, H1, H3, Content, Thumbnail } from "native-base"
import Heading from "./Heading.js"
import Footing from "./Footing"

const Home = () => {
    return (
        <Container style={{width: "100%"}}>
            <Heading/>
            <Content>
                <Container style={{alignItems: "center", margin: 20}}>
                    <Thumbnail large source={{uri:"https://lh3.googleusercontent.com/i78MYR56zDsZGC5hcEG2rBVcEqmGTVYK0nu8V_HrDXcfmPtNTsYLMnQ2XQu4DHLXrswwON1fTFk4EaVJG76utgRpP0qyBG7awULacLFG55luF7gcM3kG_2TJ-7cm_Aa1PYn6pK2IPQ=w2400"}} style={{height: 150, width: 150, borderRadius: 75, margin: 25}}/>
                    <H1>Evan Young</H1>
                    <H3>Software Engineer</H3>
                    <Text>This is gonna be the placeholder for a short little bio about a person and what they like, what they hate,
                        who they hate, who they like, if they like long walks on the beach etc.
                    </Text>
                </Container>
            </Content>
            <Footing/>
        </Container>
    )
}

export default Home