import ReptileService from '@/views/Service/ReptileService'
import Edit from '@/views/Service/Edit'
import ThirdService from '@/views/Service/ThirdService'


export default [
  {
    path: '/service/reptileService',
    name: 'ReptileService',
    component: ReptileService
  },
  {
    path: '/service/edit',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/service/thirdService',
    name: 'ThirdService',
    component: ThirdService
  },
]