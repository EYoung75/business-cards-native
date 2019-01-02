import React from "react"
import { Footer, FooterTab, Icon, Button } from "native-base"
import { Link } from "react-router-native"

const Footing = () => {
    return (
        <Footer style={{justifyContent: "flex-end"}}>
            <FooterTab>
                <Button>
                    <Link to="/connections">
                        <Icon name="people"/>
                    </Link>
                </Button>
                <Button>
                    <Link to="/search">
                        <Icon name="search"/>
                    </Link>
                </Button>
                <Button>
                    <Link to="/home">
                        <Icon name="person"/>
                    </Link>
                </Button>
            </FooterTab>
        </Footer>

    )
}

export default Footing