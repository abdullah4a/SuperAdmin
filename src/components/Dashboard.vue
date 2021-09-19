<template>
  <v-app>
    <pageloader v-if="loading" />
    <v-main class="ml-7">
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
            <v-dialog v-model="dialog" width="500" :fullscreen="maxi">
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
                  <v-spacer></v-spacer>
                  <v-icon></v-icon>
                  <v-icon @click="maximize" v-if="!maxi">
                    mdi-window-maximize
                  </v-icon>
                  <v-icon v-else @click="maximize">mdi-window-restore</v-icon>
                  <v-icon @click="closeDialog">mdi-window-close</v-icon>
                </v-card-title>
                <v-card-text>
                  <v-text-field id="Itemid" label="ID"> </v-text-field>
                  <v-text-field id="ItemName" label="Item Name"> </v-text-field>
                  <v-text-field id="ItemPrice" label="Item Price">
                  </v-text-field>
                  <v-text-field id="ItemInStock" label="Item Availability">
                  </v-text-field>
                  <v-text-field id="ItemRemark" label="Remarks"> </v-text-field>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn rounded dark @click="closeDialog">
                    <v-icon>mdi-cancel</v-icon>
                    <span>cancel</span>
                  </v-btn>
                  <v-btn rounded dark @click="AddItem">
                    <v-icon>mdi-plus</v-icon>
                    <span>save</span>
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
              multi-sort
              :footer-props="{
                showFirstLastPage: true,
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus',
              }"
            >
              <!--sort-by="name" -->
              <template #items.remarks="{ item }">
                <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
              </template>
            </v-data-table>
          </v-col>
        </v-row>
      </v-card>
      <message />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import message from "./Message.vue";
import Component from "vue-class-component";
import pageloader from "./PageLoader.vue";
import { Item } from "../Shared";
@Component({
  components: {
    message,
    pageloader,
  },
})
export default class Dashboard extends Vue {
  serch = "";
  private dialog = false;
  private chip = false;
  private maxi = false;
  private Items = [];
  private ClassName = "DashBoard";
  private headers = [
    { text: "Item Id", value: "id" },
    { text: "Item", value: "name" },
    { text: "Price", value: "price" },
    { text: "Availability", value: "InStock" },
    { text: "Remarks", value: "remarks" },
  ];
  // private Items = [
  //   {
  //     id: 1000,
  //     name: "Apples",
  //     price: "100",
  //     InStock: "In Stock",
  //     remarks: "",
  //   },
  //   {
  //     id: 1001,
  //     name: "Ice cream Feast",
  //     price: "98.44",
  //     InStock: "Not In Stock",
  //     remarks: "",
  //   },
  //   {
  //     id: 1002,
  //     name: "Candy",
  //     price: "5",
  //     InStock: "In Stock",
  //     remarks: "",
  //   },
  // ];
  private loading = true;
  private NewItem = [];
  closeDialog() {
    this.dialog = false;
  }
  beforeCreate() {
    this.loading = true;
  }
  async created() {
    this.loading = false;
    await this.LoadItems();
  }
  maximize() {
    if (!this.maxi) {
      this.maxi = true;
    } else {
      this.maxi = false;
    }
  }
  deleteItem(item: any) {
    Item.deleteItem(item);
  }
  AddItem() {
    //   // Items.AddItems(this.NewItem);
    //   // let id = document.querySelector("input[Itemid]")?.nodeValue;
    // let id = document.getElementById("Itemid")!;
    // let Name = document.getElementById("ItemName")!;
    // let price = document.getElementById("ItemPrice")!;
    // let InStock = document.getElementById("ItemInStock")!;
    // let Remark = document.getElementById("ItemRemark")!;
    // this.NewItem.push(id.value);
    // this.NewItem.push(Name.value);
    // this.NewItem.push(price.value);
    // this.NewItem.push(InStock.value);
    // this.NewItem.push(Remark.value);
    // console.log(`Added Item where Items=${this.NewItem}`);
  }

  LoadItems() {
    try {
      if (Item.ItemsGetFunction()) {
        if (Item.ItemsGetFunction() !== []) {
          this.Items.push(Item.ItemsGetFunction());
          alert("Data fetched");
        } else {
          alert("Null Data");
        }
      } else {
        console.info("No Data");
      }
    } catch (error) {
      alert("Error getting connection " + error);
    }
  }
}
</script>
