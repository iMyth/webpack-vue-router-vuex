import { requestType } from './config.js'

export default [{
  name: 'fetchIds',
  url: 'http://demo',
  method: requestType.POST,
  dataType: 'application/json'
}, {
  name: 'fetchDataByIds',
  url: 'http://demo',
  method: requestType.GET
}, {
  name: 'fetchAd',
  url: 'http://demo',
  method: requestType.JSONP,
  callbackName: 'callback'
}]
