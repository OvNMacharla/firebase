const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'firebase-food-order',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

