<template>
  <v-app>
    <v-card>
      <v-card-title>
        <v-icon>
          mdi-message
        </v-icon>
        <span class="text h2">Messages</span>
      </v-card-title>
      <v-card-text v-for="data in Data" :key="data.title">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="caption gray--text">{{ data.title }}</div>
            <div>{{ data.message }}</div>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      Data: [
        {
          title: "Ali",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias neque dolorum ratione earum debitis, perspiciatis soluta officiis esse in voluptas saepe itaque maiores autem modi ea,quibusdam pariatur tempora.",
        },
        {
          title: "Farhan",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias neque dolorum ratione earum debitis, perspiciatis soluta officiis esse in voluptas saepe itaque maiores autem modi ea,quibusdam pariatur tempora.",
        },
        {
          title: "Asad",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas molestias neque dolorum ratione earum debitis, perspiciatis soluta officiis esse in voluptas saepe itaque maiores autem modi ea,quibusdam pariatur tempora.",
        },
      ],
    };
  },
});
</script>
