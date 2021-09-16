<template>
  <v-app>
    <!--  ******************* -->
    <!--Steppers Start in here-->
    <!--  ******************* -->
    <!--  ******************* -->
    <v-main>
      <v-card>
        <v-btn v-show="e6 == 0" @click="e6 = 1" class="success">
          <v-icon>mdi-autorenew</v-icon>
          <v-spacer></v-spacer>
          <span>Enter Details</span>
        </v-btn>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            <span>Personal Detail</span>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card color="grey lighten-1" class="mb-12">
              <PersonalInfo />
            </v-card>
            <v-btn color="primary" @click="e6 = 3">
              Continue
            </v-btn>
            <v-btn text @click="e6 = 0">
              Cancel
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            <span>Education</span>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card color="grey lighten-1" class="mb-12">
              <education />
            </v-card>
            <v-btn color="primary" @click="e6 = 3">
              Continue
            </v-btn>
            <v-btn text @click="e6 = 1">
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
import Vue from "vue";
import Componet from "vue-class-component";
import education from "./Education.vue";
import PersonalInfo from "./PersonalInfo.vue";
@Componet({
  components: {
    education,
    PersonalInfo,
  },
})
export default class Steppers extends Vue {
  private e6 = 1;
}
</script>
