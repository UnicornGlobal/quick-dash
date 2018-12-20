import { shallowMount, createLocalVue } from '@vue/test-utils'
import CustomComponent from '~/components/CustomComponent'

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

  it('Renders configured component', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(CustomComponent, {
      localVue,
      propsData: {
        custom: 'abc'
      }
    })

    expect(wrapper.find('p').text()).to.equal('Custom Property: abc')
    expect(wrapper.find('button').text()).to.equal('clicked 0 times')
  })

  it('Clicks the example button', () => {
    let localVue = createLocalVue()
    const wrapper = shallowMount(CustomComponent, {
      localVue,
      propsData: {
        custom: 'abc'
      }
    })

    wrapper.find('button').trigger('click')
    expect(wrapper.find('button').text()).to.equal('clicked 1 times')
  })
})
