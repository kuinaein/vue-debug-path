<template>
  <div id="app">
    This is App. param={{someParam}}<br/>
    <a :href="$path.abs('/2/')">Link to App2</a><br/>
    <a target="_blank" :href="$path.abs('/2/')">
        Open App2 in a new tab</a><br>
    <a @click="openApp2" href="#">Open App2 in a new window</a>
    <form :action="$path.abs('/2/')">
      <button type="submit">Post to App2</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'app',
  props: ['someParam'],
})
export default class App extends Vue {
  public openApp2(ev: Event) {
    ev.preventDefault();
    const url = this.$path.abs('/2/');
    window.open(url, '_blank', 'width=400,height=300');
    console.log(url);
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
