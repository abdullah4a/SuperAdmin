<template>
  <div class="about">
    <v-card>
      <v-card-title>
        About Us
      </v-card-title>
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
