export function defaultHandler (resp, resolve, reject) {
  if (!resp.result || resp.result.error_code !== 'SUCCESS' || !resp.result.data) {
    return reject(resp)
  }
  if (resp.result.data && (resp.result.data.message === 'OK' || resp.result.data.result === 'ok')) {
    return resolve(resp.result.data)
  }
  return reject(resp)
}

export function jsonpHandler (resp, resolve, reject) {
  if (!resp.result || !resp.data) {
    return reject(resp)
  }
  if (resp.data && resp.result === 'ok') {
    return resolve(resp.data)
  }
  return reject(resp)
}
