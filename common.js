const imsProps = {
    imsClientId: 'aemcs-sasha-assetselector',
    imsOrg: '76B329395DF155D60A495E2C@AdobeOrg',
    imsScope: 'AdobeID,openid,additional_info.projectedProductContext,read_organizations',
    redirectUrl: window.location.href,
    modalMode: true,
    onImsServiceInitialized: (service) => {
        console.log('onImsServiceInitialized', service);
    },
    onAccessTokenReceived: (token) => {
        console.log('onAccessTokenReceived', token);
    },
    onAccessTokenExpired: () => {
        console.log('onAccessTokenError');
    },
    onErrorReceived: (type, msg) => {
        console.log('onErrorReceived', type, msg);
    },
};
