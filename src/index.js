import _ from 'lodash'
import './style.css'
import Webpack from './webpack.png'
import Data from './data.xml'
function component() {
  var element = document.createElement('div')
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')
  var myIcon = new Image()
  myIcon.src = Webpack
  element.appendChild(myIcon)
  console.log(Data)
  return element
}
document.body.appendChild(component())
