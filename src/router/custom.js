import CustomComponent from '~/components/CustomComponent'
import icons from '@/icons'

export default [
  {
    name: 'Custom',
    path: '/custom',
    component: CustomComponent,
    meta: {
      main: true,
      label: 'Custom',
      icon: icons.clock
    }
  }
]
