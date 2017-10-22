<template>
  <div id="app">
    This is App2. param={{someParam}}<br>
    <a :href="$path.abs('/')">Back to App</a><br>
    <a @click="openApp" href="#">Open App2 in a new window</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'app2',
  props: ['someParam'],
})
export default class App2 extends Vue {
  public openApp(ev: Event) {
    ev.preventDefault();
    const url = this.$path.abs('/');
    window.open(url, '_blank', 'width=400,height=300');
    console.log(url);
  }
}
</script>
