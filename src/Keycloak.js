import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: "http://localhost:8180/auth/",
    realm: "lsac",
    clientId: "microstrategy"
});

export default keycloak;