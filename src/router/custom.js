import CustomComponent from '~/components/CustomComponent'

export default [
  {
    name: 'Custom',
    path: '/custom',
    component: CustomComponent,
    meta: {
      main: true,
      label: 'Custom',
      icon: require('@/assets/icons/home.svg').default
    }
  }
]
