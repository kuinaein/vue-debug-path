<template>
  <router-view/>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { initRouter }  from './router';

@Component({ router: initRouter() })
export default class DebugRouterFrame extends Vue {
}
</script>
