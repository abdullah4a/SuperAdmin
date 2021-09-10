<template>
  <v-app>
    <v-card>
      <v-card-title>
        {{ ClassName }}
      </v-card-title>
      <v-row>
        <!-- Search Box -->
        <v-col md="4">
          <v-text-field
            v-model="serch"
            append-icon="mdi-magnify"
            label="Search"
            single-line
          >
          </v-text-field>
        </v-col>
        <!-- Button for dialog to Enter  Items -->
        <v-col md="2">
          <v-dialog v-model="dialog" max-width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="green--text" text v-on="on" v-bind="attrs" rounded>
                <v-icon>mdi-plus</v-icon>
                <span>Add Items</span>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <v-icon>mdi-file-plus</v-icon>
                <span>Add Item</span>
              </v-card-title>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
      <v-row>
        <!-- DataTable -->
        <v-col text-center>
          <v-data-table
            :headers="headers"
            :items="Items"
            :items-per-page="2"
            item-key="name"
            :search="serch"
            sort-by="name"
            multi-sort
            group-by="price"
            class="elevation-3"
            :footer-props="{
              showFirstLastPage: true,
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          >
          </v-data-table>
        </v-col>
      </v-row>
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
