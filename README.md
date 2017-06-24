# Dashboards Microservice Client SDK for Node.js

This is a Node.js client SDK for [pip-services-dashboards](https://github.com/pip-services-content/pip-services-dashboards-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP client
* Seneca client (see http://www.senecajs.org)
* AWS Lambda client
* Direct client
* Null test client

<a name="links"></a> Quick Links:

* [Development Dashboard](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "pip-clients-dashboards-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('pip-clients-dashboards-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.DashboardsHttpClientV1(config);

// Connect to the microservice
client.open(null, function(err) {
    if (err) {
        console.error('Connection to the microservice failed');
        console.error(err);
        return;
    }
    
    // Work with the microservice
    ...
});
```

Now the client is ready to perform operations
```javascript
// Get a dashboard
client.getDashboard(
    null,
    '123', 'Test App 1', 'default',
    function (err, dashboard) {
        ...
    }
);
```

```javascript
// Sets an updated dashboard
client.setDashboard(
    null,
    dashboard,
    function(err, dashboard) {
        ...    
    }
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

