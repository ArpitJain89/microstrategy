import React, { useState, useEffect } from 'react';
import logo from '../images/saamaLogo.png'
import Lsacsupernavbar from '@saama/lsac-supernavbar'
import Keycloak from 'keycloak-js';
import { useKeycloak } from "@react-keycloak/web";

const Home = (props) => {
	const [keycloak, setKeycloak] = useState(null);
	const [authenticated, setAuthenticated] = useState(false)


	useEffect(() => {
		const keycloakVal = Keycloak({
			url: "http://localhost:8180/auth/",
			realm: "lsac",
			clientId: "microstrategy"
		});
		keycloakVal.init({ onLoad: 'login-required' }).then(authenticated => {
			setKeycloak(keycloakVal);
			setAuthenticated(authenticated)
		})
	}, [])


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

	return (
		keycloak ? authenticated ? (<div className="container">
			<div className="main">
				<Lsacsupernavbar
					topNavHeight='5.5rem'
					sidebarDisplayMode='minimal'
					topnavDisplayMode='minimal'
					applicationTitle={applicationTitle}
					appContext={appContext}
					domain={appDomainOrigin}
					// userInfo={userInfoObject}
					runMode='development' />

			</div></div>) : (<div>Unable to authenticate!</div>) : <div>Initializing Keycloak...</div>
	)
}

export default Home;