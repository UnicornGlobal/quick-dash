export default [
  {
    name: 'Custom',
    path: '/custom',
    component: require('~/components/CustomComponent').default,
    meta: {
      main: true,
      label: 'Custom',
      icon: require('@/assets/icons/home.svg').default
    }
  }
]
