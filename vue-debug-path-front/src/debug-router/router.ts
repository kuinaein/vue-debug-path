import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App.vue';
import App2 from '@/App2.vue';

export function initRouter() {
  if ('production' === process.env.NODE_ENV) {
    return;
  }

  Vue.use(Router);

  return new Router({
    routes: [
      {
        path: '/',
        name: 'App',
        component: App,
        props: {
          someParam: 'foo',
        },
      },
      {
        path: '/2/',
        name: 'App2',
        component: App2,
        props: {
          someParam: 'bar',
        },
      },
    ]
  });
}
