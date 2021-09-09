<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>
        <v-icon>
          mdi-dashboard
        </v-icon>
        <span>Dashboard</span>
      </v-app-bar-title>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <v-list dense>
          <v-list-item-group
            active-class="deep-purple--text text--accent-4"
            v-for="navItem in navItems"
            :key="navItem.id"
          >
            <v-list-item class="text-h1">
              <v-icon>mdi-{{ navItem.icon }}</v-icon>
              <v-list-item-title class="pl-4">{{
                navItem.text
              }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-app-bar>

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
