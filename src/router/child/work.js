import Work from '@/components/pages/work/workList'
import WorkDetail from '@/components/pages/work/workDetail'

const childroutes = [
  {
    path: '/',
    name: 'workList',
    meta: {
      authorized: false
    },
    component: Work
  },
  {
    path: '/detail',
    name: 'workDetail',
    meta: {
      authorized: false
    },
    component: WorkDetail
  }
]

export default childroutes
