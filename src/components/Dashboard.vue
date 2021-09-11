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
              <v-btn
                class="green--text"
                text
                v-on="on"
                v-bind="attrs"
                rounded
                @click="dialog = true"
              >
                <v-icon>mdi-plus</v-icon>
                <span>Add Items</span>
              </v-btn>
              <!-- chip will rendered when items pushed into list -->
              <v-chip
                v-if="chip"
                class="ma-2"
                close
                color="green"
                outlined
                @click:close="chip = false"
              >
                Success
              </v-chip>
            </template>
            <v-card>
              <v-card-title>
                <v-icon>mdi-file-plus</v-icon>
                <span>Add Item</span>
              </v-card-title>
              <v-card-text>
                <v-text-field label="Item Name"></v-text-field>
                <v-text-field label="Item Price"></v-text-field>
                <v-text-field label="Item Availability"></v-text-field>
                <v-text-field label="Remarks"></v-text-field>
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn rounded dark @click="closeDialog">
                  <v-icon>mdi-plus</v-icon>
                  <span>cancel</span>
                </v-btn>
                <v-btn rounded dark @click="closeDialog">
                  <v-icon>mdi-plus</v-icon>
                  <span>add</span>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
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
            class="elevation-3"
            :footer-props="{
              showFirstLastPage: true,
              prevIcon: 'mdi-minus',
              nextIcon: 'mdi-plus',
            }"
          >
            <template v-slot:item.remarks="{ item }">
              <v-icon small @click="deleteItem(item.id)">mdi-delete</v-icon>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import CrudDataTables from "./Crud DataTables.vue";
@Component({})
export default class Dashboard extends Vue {
  serch = "";
  private dialog = false;
  private chip = false;
  private ClassName = "DashBoard";
  private headers = [
    { text: "Item Id", align: "start", value: "id" },
    { text: "Item", value: "name" },
    { text: "Price", value: "price" },
    { text: "Availability", value: "InStock" },
    { text: "Remarks", value: "remarks" },
  ];
  private Items = [
    {
      id: 1000,
      name: "Apples",
      price: "100",
      InStock: "In Stock",
      remarks: "",
    },
    {
      id: 1001,
      name: "Ice cream Feast",
      price: "98.44",
      InStock: "Not In Stock",
      remarks: "",
    },
    {
      id: 1002,
      name: "Candy",
      price: "5",
      InStock: "In Stock",
      remarks: "",
    },
  ];
  closeDialog() {
    if (this.dialog) {
      this.dialog = false;
    }
  }
  deleteItem(id: any) {
    const index = this.Items.indexOf((x) => x.id === id);
    if (index > -1) {
      this.Items.splice(index, 1);
    }
  }
}
</script>
