import urls from './urls.js'
import { requestType } from './config.js'

const mapping = {
  [requestType.JSONP]: 'jsonp',
  [requestType.GET]: 'http',
  [requestType.POST]: 'http'
}

class ServiceFactory {
  constructor (apis) {
    this.services = {}
    apis.forEach(api => {
      this.services[api.name] = this.getService(api)
    })
  }
  getService (param) {
    let Service = require(`./services/${mapping[param.method] || param.method}Service.js`).default
    return new Service(param)
  }
  getInstance () {
    return this.services
  }
}

const service = new ServiceFactory(urls)
export default service.getInstance()
