import Vue from 'vue'
import QuickDash from '@unicorns/quick-dash-framework'
// import router from '~/router'

async function loader() {
  let element = document.createElement('div')

  element.setAttribute('id', 'initialLoader')
  element.setAttribute('style', '')

  return element
}

async function component() {
  let element = document.createElement('div')

  element.setAttribute('id', 'app')

  return element
}

async function boot() {
  document.body.appendChild(await loader())
  document.body.appendChild(await component())
}

boot()

Vue.use(QuickDash, {
  
  // router
})
