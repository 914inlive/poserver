module.exports = {
  "cluster": false,
  "httpPorts": [4000],
  "httpsPorts": [8443],
  "ssl": {
    'key': '../ssl/private.pem',
    'cert': '../ssl/cacert.pem',
  }
};