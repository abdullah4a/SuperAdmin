<template>
  <div class="about">
    <v-card>
      <h1 class="text-h4">About Us</h1>
    </v-card>
    <login />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import login from "../components/Login.vue";
export default Vue.extend({
  components: {
    login,
  },
});
</script>
