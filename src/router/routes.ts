import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('src/pages/Row.vue')},
      {path: '/column', component: () => import('src/pages/Column.vue')},
      {path: '/flexDetail', component: () => import('src/pages/FlexDetail.vue')},
      {path: '/position', component: () => import('src/pages/PositionPage.vue')},
      {path: '/position1', component: () => import('src/pages/PositionPage1.vue')},
      {path: '/position2', component: () => import('src/pages/PositionPage2.vue')},
      {path: '/background', component: () => import('src/pages/BackgroundAttachment.vue')},
      {path: '/background1', component: () => import('src/pages/BackgroundAttachment1.vue')},
      {path: '/background2', component: () => import('src/pages/BackgroundImage.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
];

export default routes;
