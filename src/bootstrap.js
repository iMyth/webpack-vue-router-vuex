const filterSelect = {'INPUT': true, 'TEXTAREA': true}
const VK_BACK = 8
const VK_TAB = 9

// disable context menu
document.oncontextmenu = function (e) {
  e.returnValue = false
}
// disable selection
document.onselectstart = function (e) {
  let element = e.srcElement
  if (e) {
    if (filterSelect[element.tagName]) {
      return true
    }
    if (element.parentElement && element.parentElement.webkitMatchesSelector('[selectable]')) {
      return true
    }
  }
  return false
}

// disable drag
document.ondragstart = function (e) {
  let element = e.srcElement
  if (e) {
    if (filterSelect[element.tagName]) {
      return true
    }
  }

  return false
}

document.onkeydown = function (e) {
  if (e.keyCode === VK_TAB || e.keyCode === VK_BACK) {
    let tagName = document.activeElement.tagName
    if (tagName !== 'INPUT' && tagName !== 'TEXTAREA') {
      return false
    }
  }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope)
    }).catch(function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err)
    })
  })
}
