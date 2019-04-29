import Observe from '@/views/Data/Observe'
import Export from '@/views/Data/Export'
import Import from '@/views/Data/Import'

export default [
  {
    path: '/data/observe',
    name: 'Observe',
    component: Observe
  },
  {
    path: '/data/export',
    name: 'Export',
    component: Export
  },
  {
    path: '/data/import',
    name: 'Import',
    component: Import
  }
]