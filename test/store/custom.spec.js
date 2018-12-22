import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import custom from '~/store/custom'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/custom.js', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        custom
      }
    })
  })

  it('is an object', () => {
    expect(store).to.be.an('Object')
  })

  it('is namespaced', () => {
    expect(custom.namespaced).to.equal(true)
  })

  it('sets and gets custom object', () => {
    expect(store.getters['custom/customObject']).to.deep.equal({})
    store.commit('custom/setCustomObject', {custom: 'custom'})
    expect(store.getters['custom/customObject']).to.deep.equal({custom: 'custom'})
    store.commit('custom/setCustomObject', {changed: 'changed'})
    expect(store.getters['custom/customObject']).to.deep.equal({changed: 'changed'})
  })
})
