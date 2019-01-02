import React from "react"
import { Container, Content, Footer, FooterTab, Icon, Button } from "native-base"

const Footing = () => {
    return (
        <Container>
            <Footer>
                <FooterTab>
                    <Button>
                        <Icon name="people"/>
                    </Button>
                    <Button>
                        <Icon name="search"/>
                    </Button>
                    <Button>
                        <Icon name="person"/>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    )
}

export default Footing