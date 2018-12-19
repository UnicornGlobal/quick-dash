import { shallowMount, createLocalVue } from '@vue/test-utils'
import CustomComponent from '~/components/CustomComponent.vue'

describe('CustomComponent.vue', () => {
  it('Has the correct properties', () => {
    expect(CustomComponent.props).to.be.an('object').that.has.all.keys('custom')
  })

  it('Renders default properties', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(CustomComponent, {
      localVue
    })

    expect(wrapper.find('p').text()).to.equal('Custom Property: xxx')
  })

  it('Renders the component', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(CustomComponent, {
      localVue,
      propsData: {
        custom: 'abc'
      }
    })

    expect(wrapper.find('p').text()).to.equal('Custom Property: abc')
  })
})
