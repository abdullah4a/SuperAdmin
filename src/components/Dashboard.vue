<template>
  <v-app>
    <v-card>
      <v-card-title>
        {{ ClassName }}
      </v-card-title>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class Dashboard extends Vue {
  private ClassName = "DashBoard";
}
</script>
