<template>
  <v-app loader class="loader">
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
    <div class="cube"></div>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>
<style lang="scss" scoped>
$color: #8cc271, #69beeb, #f5a39f, #e9643b;
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  z-index: 999;
}
.cube {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @for $i from 1 through length($color) {
    &:nth-child(#{n}) {
      background-color: nth($color, $i);
    }
  }
}
@keyframes left {
  40% {
    transform: translateX(-60px);
  }
  50% {
    transform: translateX(0);
  }
}
@keyframes right {
  40% {
    transform: translateX(60px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
