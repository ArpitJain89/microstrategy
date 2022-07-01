import React, { useState, useEffect } from 'react';
import logo from '../images/saamaLogo.png'
import Lsacsupernavbar from '@saama/lsac-supernavbar'
// import Keycloak from 'keycloak-js';
import { useKeycloak } from "@react-keycloak/web";

const Home = (props) => {
    const { keycloak, initialized } = useKeycloak();

    // keycloak.init({ onLoad: 'login-required' })

    //const [test, test] = useState('');


    useEffect(() => {
        debugger
        // getKeycloak();
    }, [initialized])


    const serverUrl = ''

    const applicationTitle = ""
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
    const sidebarOptions = [
        {
            "category": "collaboration",
            "label": "Tasks",
            "icomoonId": "task-list"
        }
    ]

    return (
    <div className="container">
        <h1>Homepage</h1>
        <div className="main">
            {!keycloak.authenticated ? keycloak.login() : <Lsacsupernavbar
           topNavHeight='5.5rem'
           sidebarDisplayMode='minimal'
           topnavDisplayMode='minimal'
           applicationTitle={applicationTitle}
           appContext={appContext}
           domain={appDomainOrigin}
           userInfo={userInfoObject}
           runMode='development' />}
        {/* <Lsacsupernavbar
           topNavHeight='5.5rem'
           sidebarDisplayMode='minimal'
           topnavDisplayMode='minimal'
           applicationTitle={applicationTitle}
           appContext={appContext}
           domain={appDomainOrigin}
           userInfo={userInfoObject}
           runMode='development'
          accountSwitchUrl={serverUrl + 'realms/lsac/api/accountSwitcher?redirect_uri=' + window.location.origin + '/'}
          logoutUrl={
            serverUrl + 'realms/lsac/protocol/openid-connect/logout?redirect_uri=' + window.location.origin + '/'
          }
          domain={domain}
          hostOnly={hostOnly}
          appName='microstrategy'
          appVersion={appVersion}
        /> */}
        </div>
    </div>
    );
}

export default Home;