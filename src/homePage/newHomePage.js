import React, { Component } from 'react';
import Keycloak from 'keycloak-js';
import Lsacsupernavbar from '@saama/lsac-supernavbar'


const applicationTitle = "Microstretegy"
const appContext = "home"
const appDomainOrigin = ""
const userInfoObject = {
    "name": "test cqs Xoroto",
    "given_name": "",
    "family_name": "Xoroto",
    "email": "testuser+cqs+microstrategy@xoroto.com",
    "applications": [
        {
            "name": "microstrategy",
            "url": "",
            "attributes": {
                "ACCOUNT_DEFAULT_APP": "true",
                "app-type": "module",
                "showInKa": "true",
                "rank": "1",
                "showInAM": "true",
                "client-id": "microstrategy",
                "module-parent": "lsac-darkroom",
                "category": "my_apps"
            }
        },
    ]
}

class NewHomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { keycloak: null, authenticated: false };
    }

    componentDidMount() {
        const keycloak = Keycloak({
            url: "http://localhost:8180/auth/",
            realm: "lsac",
            clientId: "microstrategy"
        });
        keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
            this.setState({ keycloak: keycloak, authenticated: authenticated })
        })
    }

    render() {
        if (this.state.keycloak) {
            if (this.state.authenticated) return (
                <div className="container">
                    <div className="main">
                        <Lsacsupernavbar
                            topNavHeight='5.5rem'
                            sidebarDisplayMode='minimal'
                            topnavDisplayMode='minimal'
                            applicationTitle={applicationTitle}
                            appContext={appContext}
                            domain={appDomainOrigin}
                            userInfo={userInfoObject}
                            runMode='development' />

                    </div></div>
            ); else return (<div>Unable to authenticate!</div>)
        }
        return (
            <div>Initializing Keycloak...</div>
        );
    }
}
export default NewHomePage;
