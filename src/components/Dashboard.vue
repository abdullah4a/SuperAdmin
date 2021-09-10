<template>
  <v-app>
    <v-card>
      <v-card-title>
        {{ ClassName }}
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="Items"
        :items-per-page="2"
        item-key="name"
        sort-by="name"
        multi-sort
        group-by="price"
        class="elevation-3"
        :footer-props="{
          showFirstLastPage: true,
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus',
        }"
        show-group-by
      >
      </v-data-table>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({})
export default class Dashboard extends Vue {
  serch = "";
  private ClassName = "DashBoard";
  private headers = [
    {
      text: "Item",
      align: "start",
      value: "name",
    },
    { text: "Price", value: "price" },
    { text: "In Stock", value: "Availability" },
    { text: "Remarks", value: "remarks" },
  ];
  private Items = [
    {
      name: "Apples",
      price: "100",
      Availability: "Available",
      remarks: "",
    },
    {
      name: "Ice cream Feast",
      price: "98.44",
      Availability: "Not Available",
      remarks: "",
    },
    {
      name: "Candy",
      price: "5",
      Availability: "Available",
      remarks: "",
    },
  ];
}
</script>
