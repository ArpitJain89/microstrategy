let url =
        "https://demo.microstrategy.com/MicroStrategyLibrary/app/B7CA92F04B9FAE8D941C3E9B7E0CD754/14CC30F611EAEC3D273F0080EFD5628A/K53--K46"; // https://{env-url}/{libraryName}/app/{projectId}/{dossierId}
      let dossier; // Variable to store the dossier created. Used by Event Handler do not remove!
      let config; // Variable to store the configuration settings for dossier.
      async function runCode() {
        // For more details on configuration properties, see https://www2.microstrategy.com/producthelp/Current/EmbeddingSDK/Content/topics/dossier_properties.htm
        config = {
          url: url,
          placeholder: document.getElementById("embedding-dossier-container"),
          containerHeight: "400px",
          containerWidth: "200px",
          customAuthenticationType:
            microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
          disableNotification: true,
          dockedComment: {
            dockedPosition: "left",
            canClose: true,
            dockChangeable: false,
            isDocked: false,
          },
          dockedFilter: {
            dockedPosition: "left",
            canClose: true,
            dockChangeable: false,
            isDocked: false,
          },
          dockedTOC: {
            dockedPosition: "left",
            theme: "light",
            canClose: true,
            dockChangeable: false,
            isDocked: false,
          },
          dossierFeature: {
            readonly: false,
          },
          enableCollaboration: true,
          enableCustomAuthentication: false,
          enableResponsive: true,
          filterFeature: {
            enabled: false,
            edit: true,
            summary: true,
          },
          filters: [],
          getLoginToken: function login() {
            console.log("Implement log in to return promise of auth token");
          },
          navigationBar: {
            enabled: false,
          },
          optionsFeature: {
            enabled: true,
            help: false,
            logout: true,
            manage: false,
            showTutorials: false,
          },
          shareFeature: {
            enabled: true,
            invite: false,
            link: true,
            email: false,
            export: true,
            download: false,
            shareDossier: false,
            subscribe: false,
          },
          smartBanner: false,
          tocFeature: {
            enabled: true,
          },
          uiMessage: {
            enabled: true,
            addToLibrary: false,
          },
          visibleTutorials: {
            library: true,
            welcome: false,
            dossier: true,
            notification: false,
          },
          visualizationAppearances: [],
        };
        // INSERT PROPERTIES BELOW HERE

        /* Embed Single Visualization Start */
        config.visualizationAppearances = [
          {
            visualizationKey: "K52", // Replace with visualization key in your dossier
            size: "maximized",
            resizeButtonVisible: false,
          },
        ];
        
        /* Embed Single Visualization End */

        // INSERT PROPERTIES ABOVE HERE

        // Embed the dossier with the configuration settings
        try {
          dossier = await window.microstrategy.dossier.create(config);
        } catch (error) {
          console.error(error);
        }

        // INSERT METHODS BELOW HERE

        /* Get Current Page Visualizations Start */
        dossier
          .getCurrentPageVisualizationList()
          .then((list) => {
            console.log("Current Page Visualization List:", list);
          })
          .catch((error) => {
            console.error(error);
          });
        /* Get Current Page Visualizations End */

        // INSERT METHODS ABOVE HERE
      }
      runCode();

      