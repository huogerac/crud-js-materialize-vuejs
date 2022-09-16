import PrivateLayout from '@/layouts/PrivateLayout.vue'
import TasksListView from '@/views/tasks/TasksListView.vue'
import TasksUpdateView from '@/views/tasks/TasksUpdateView.vue'
import TasksSummaryView from '@/views/tasks/TasksSummaryView.vue'

export default [
  {
    path: '/tasks',
    component: PrivateLayout,
    children: [
      {
        path: 'summary',
        name: 'taskSummary',
        component: TasksSummaryView,
      },
      {
        path: ':id',
        name: 'taskUpdate',
        component: TasksUpdateView,
      },
      {
        path: '',
        name: 'taskList',
        component: TasksListView,
      },
    ],
  },
]
