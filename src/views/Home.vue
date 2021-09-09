<template>
  <Dashboard />
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Dashboard from "../components/Dashboard.vue";
@Component({
  components:{
    Dashboard,
  }
})
export default class App extends Vue {

}
</script>
