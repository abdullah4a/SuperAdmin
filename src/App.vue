<template>
  <v-app>
    <v-container>
      <v-app-bar app color="indigo" dark>
        <!-- <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon> -->
        <v-btn fab dark @click="drawer = !drawer" class="mr-2" text>
          <v-icon v-if="!drawer">mdi-format-list-bulleted-square</v-icon>
          <v-icon v-else>mdi-close</v-icon>
        </v-btn>
        <v-app-bar-title>
          <v-icon>
            mdi-dashboard
          </v-icon>
          <span>Dashboard</span>
        </v-app-bar-title>
      </v-app-bar>
    </v-container>
    <v-navigation-drawer v-model="drawer" class="indigo" dark app>
      <v-list nav dense>
        <v-list-item
          v-for="navItem in navItems"
          :key="navItem.text"
          router
          :to="navItem.route"
        >
          <v-icon>mdi-{{ navItem.icon }}</v-icon>
          <v-list-item-title class="pl-4 text-h6">{{
            navItem.text
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class App extends Vue {
  private drawer = false;
  navItems = [
    {
      icon: "home",
      text: "Home",
      route: "/",
    },
    {
      icon: "information",
      text: "About",
      route: "/about",
    },
  ];
}
</script>
