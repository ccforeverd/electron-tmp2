import './index.css'
import ElectronTabs from 'electron-tabs'

const tabGroup = new ElectronTabs({
  // newTab: {
  //   title: 'New Tab'
  // }
})

// tabGroup.addTab({
//   title: 'Google',
//   src: 'http://google.com'
// })

// tabGroup.addTab({
//   title: 'Baidu',
//   src: 'https://baidu.com'
// })

function createInterceptedTab (url: string): ElectronTabs.Tab {
  const tab = tabGroup.addTab({
    title: 'edu-back',
    src: url,
    visible: true,
    active: true
  })

  tab.on('webview-dom-ready', tab => {
    const { webview } = tab
    let url = ''
    // webview.addEventListener('will-navigate', (event: any) => {
    //   console.log('will-navigate', event)
    // })
    // webview.addEventListener('will-navigate-in-page', (event: any) => {
    //   console.log('will-navigate-in-page', event)
    // })
    // webview.addEventListener('did-navigate', (event: any) => {
    //   console.log('did-navigate', event)
    // })
    webview.addEventListener('did-navigate-in-page', (event: any) => {
      if (url) {
        url = ''
      } else {
        url = event.url
        setTimeout(() => {
          createInterceptedTab(event.url)
        })
      }
      webview.goBack()
      console.log('did-navigate-in-page', event)
      // setTimeout(() => webview.goBack(), 1000)
    })
  })

  return tab
}

createInterceptedTab('http://edu-back.wps.cn:3000')
