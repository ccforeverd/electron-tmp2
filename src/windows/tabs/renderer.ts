import TabGroup from 'electron-tabs'
import './index.css'

const tabGroup = new TabGroup()

const tab = tabGroup.addTab({
  title: 'baidu',
  src: 'https://www.baidu.com',
  visible: true
})

console.log(tab)
