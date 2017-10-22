import Vue from 'vue';
import PathResolver from '@/debug-router/PathResolver';
import DebugRouterFrame from '@/debug-router/DebugRouterFrame.vue';

// Vue.config.productionTip = false;
export let instance: Vue | undefined;

export function init(contextPath: string, appClass: typeof Vue, someParam: any) {
  Vue.use(PathResolver, { contextPath });

  const actualAppClass = 'production' === process.env.NODE_ENV ?
      appClass : DebugRouterFrame;
  instance = new actualAppClass({
    el: '#app',
    propsData: { someParam },
  });
}

export { default as App } from './App.vue';
export { default as App2 } from './App2.vue';
