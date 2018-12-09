export default [
  {
    name: 'Custom',
    path: '/custom',
    component: {
      template: '<div>Custom Route</div>'
    },
    meta: {
      main: true,
      label: 'Custom',
      icon: require('@/assets/icons/home.svg').default
    }
  }
]
