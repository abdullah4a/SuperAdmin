<template>
  <v-app class="text center">
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
            <div class="text h4">{{ data.title }}</div>
            <div class="caption gray--text">{{ data.message }}</div>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
    <v-card class="mx-auto text-center" color="green" dark width="500">
      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
            :value="value"
            color="rgba(255, 255, 255, .7)"
            height="200"
            padding="10"
            stroke-linecap="round"
            smooth
          >
            <template v-slot:label="item"> {{ item.value }} </template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-card-text>
        <div class="text-h3 font-weight-thick">
          Random Data
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        <v-btn block text>
          Click me
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      value: [423, 446, 675, 510, 590, 610, 10],
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
