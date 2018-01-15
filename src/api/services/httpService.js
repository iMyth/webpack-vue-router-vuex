import fetch from '../fetch.js'
import { defaultHandler } from '../responseHandler.js'

const defaultType = 'application/x-www-form-urlencoded'
const defaultMethod = 'POST'

export default class HttpService {
  constructor (option) {
    this.option = option
    return param => {
      return this.send(param)
    }
  }

  // 发送信息
  send (params) {
    let method = this.option.method || defaultMethod
    let contentType = this.option.dataType || defaultType
    let data = params.data || {}
    let target = {
      http_method: method,
      data: data,
      dataType: contentType,
      headers: new Headers({
        'Content-Type': contentType
      })
    }
    return new Promise((resolve, reject) => {
      fetch(this.option.url, target).then(function (resp) {
        defaultHandler(resp, resolve, reject)
      }).catch(err => {
        console.error(err)
        reject(err)
      })
    })
  }
}
