const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
export function find (list, f) {
  return list.filter(f)[0]
}
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
export const deepCopy = (obj, cache = []) => {
  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  const hit = find(cache, c => c.original === obj)
  if (hit) {
    return hit.copy
  }

  const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy
  })

  Object.keys(obj).forEach(key => {
    copy[key] = deepCopy(obj[key], cache)
  })

  return copy
}

export const genRandomStr = (minLength = 4, maxLength = 10) => {
  let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength

  let text = ''
  for (var i = 0; i < length; i++) {
    text += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return text
}

export const throttle = function (action, delay, isReverse) {
  let timeout = null
  let lastRun = 0
  return function () {
    if (timeout && !isReverse) {
      return
    }
    if (isReverse) {
      window.clearTimeout(timeout)
      lastRun = Date.now()
    }
    let elapsed = Date.now() - lastRun
    let context = this
    let args = arguments
    let runCallback = function () {
      lastRun = Date.now()
      timeout = false
      action.apply(context, args)
    }
    if (elapsed >= delay) {
      runCallback()
    } else {
      timeout = setTimeout(runCallback, delay)
    }
  }
}

export const formatString = function (sts, ...args) {
  return sts.replace(/{([^{}]*)}/g, function (a, b) {
    var r = args[b]
    return String(r)
  })
}

export const obj2Query = (obj) => {
  if (typeof obj === 'string') {
    return obj
  } else {
    if (typeof obj === 'object' && obj) {
      let result = []
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          result.push(`${key}=${obj[key]}`)
        }
      }
      return result.join('&')
    }
  }
}
