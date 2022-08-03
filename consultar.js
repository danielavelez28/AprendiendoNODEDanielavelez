var axios = require('axios');
var data = JSON.stringify({
    "collection": "Vendedores",
    "database": "POSDanielaVelez",
    "dataSource": "ClusterADSI364481",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://data.mongodb-api.com/app/data-gandg/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 's1AS9hrNZrKkNwv6MByMypD8wMYbA7RYvcFZUOdriyPxOE6US0jTeqTpQKVGR7vk',
    },
    data: data
};
            
axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
