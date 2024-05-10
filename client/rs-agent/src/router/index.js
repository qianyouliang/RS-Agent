import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import AIExplorer from '../views/AIExplorer.vue';
import LayerManage from '../views/LayerManage.vue';
import Login from '../views/Login.vue';
import MapVisual from '../views/MapVisual.vue';
import WorkFlow from '../views/WorkFlow.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/aiexplorer',
      name: 'aiexplorer',
      component: AIExplorer
    },
    {
      path: '/layermanage',
      name: 'layermanage',
      component: LayerManage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/mapvisual',
      name: 'mapvisual',
      component: MapVisual
    },
    {
      path: '/workflow',
      name: 'workflow',
      component: WorkFlow
    }
  ]
});

export default router;
