<template>
  <v-app>
    <!--  ******************* -->
    <!--Steppers Start in here-->
    <!--  ******************* -->
    <!--  ******************* -->
    <v-main>
      <v-card>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            Education 
            <v-stepper-step>

          <v-stepper-content step="1">
            <education/>
            <v-btn color="primary" @click="e6 = 2">
              Continue
            </v-btn>
            <v-btn text >
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            Configure analytics for this app
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 3">
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            Select an ad format and name ad unit
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 4">
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            View setup instructions
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card
              color="grey lighten-1"
              class="mb-12"
              height="200px"
            ></v-card>
            <v-btn color="primary" @click="e6 = 1">
              Continue
            </v-btn>
            <v-btn text>
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-main>
    <!--  ******************* -->
    <!--  ******************* -->
    <!-- Steppers Ends in here-->
    <!--  ******************* -->
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import Componet from "vue-class-component"
import education from "./Education.vue"
@Componet({
components:{
education,
}
})
export default class Steppers extends Vue{
  
}
</script>