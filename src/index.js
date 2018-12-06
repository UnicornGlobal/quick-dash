import Vue from '@unicorn/quick-dash'

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
