import { obj2Query } from 'util'
import { jsonpHandler } from '../responseHandler.js'
let callbackHooks = []

export default class JsonpService {
  constructor (option) {
    return (params) => {
      let callbackName = option.callbackName || `_callback${window.setTimeout(0)}`
      let getUrl = option.url + '?callback=' + callbackName + '&format=jsonp&'
      if (params) {
        getUrl += obj2Query(params)
      }
      return new Promise((resolve, reject) => {
        this.send(getUrl, {
          callbackName: callbackName,
          onSuccess (res) {
            resolve(jsonpHandler(res, resolve, reject))
          },
          onTimeout () {
            reject(new Error(`${callbackName} timeout!`))
          }
        })
      })
    }
  }

  send (src, options) {
    let callbackName = options.callbackName || 'callback'
    let onSuccess = options.onSuccess || function () {}
    let onTimeout = options.onTimeout || function () {}
    let timeout = options.timeout || 10 // sec

    let index = callbackHooks.findIndex(p => p.callback === callbackName)
    if (~index) {
      window.clearTimeout(callbackHooks[index].timeoutHandler)
      callbackHooks.splice(index, 1)
    }

    let timeoutTrigger = window.setTimeout(function () {
      delete window[callbackName]
      onTimeout()
    }, timeout * 1000)

    window[callbackName] = function (data) {
      delete window[callbackName]
      window.clearTimeout(timeoutTrigger)
      onSuccess(data)
    }

    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = src

    document.getElementsByTagName('head')[0].appendChild(script)
    callbackHooks.push({
      callback: callbackName,
      timeoutHandler: timeoutTrigger
    })
  }
}
