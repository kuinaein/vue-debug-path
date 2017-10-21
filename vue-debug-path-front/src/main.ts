import Vue from 'vue'
import router from './router'

Vue.config.productionTip = false

export let instance: Vue | undefined;

export function init(appClass: typeof Vue) {
  /* eslint-disable no-new */
  instance = new appClass({
    el: '#app',
    router
  });
}

export { default as App } from './App';
export { default as App2 } from './App2';
