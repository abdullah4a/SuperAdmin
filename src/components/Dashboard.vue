<template>
  <v-app>
    <v-card>
      <v-card-title>
        {{ ClassName }}
      </v-card-title>
      <v-card-content>
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="2"
          item-key="name"
          class="elevation-3"
          :footer-props="{
            showFirstLastPage: true,
            prevIcon: 'mdi-minus',
            nextIcon: 'mdi-plus',
          }"
        >
        </v-data-table>
      </v-card-content>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class Dashboard extends Vue {
  private ClassName = "DashBoard";
  private headers = [
    {
      text: "Item (1Kg serving)",
      align: "start",
      value: "name",
    },
    { text: "Price", value: "price" },
    { text: "In Stock", value: "Availability" },
    { text: "Remarks", value: "remarks" },
  ];
  private desserts = [
    {
      name: "Frozen Yogurt",
      price: "100",
      Availability:"Available"
    },
    {
      name: "Ice cream sandwich",
      price: "98.44",
      Availability:"Not Avail"
    },
    {
      name: "Eclair",
      price: "5",
    },
  ];
}
</script>
