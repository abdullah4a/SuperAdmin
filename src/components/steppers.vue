<template>
  <v-app>
    <!--  ******************* -->
    <!--Steppers Start in here-->
    <!--  ******************* -->
    <!--  ******************* -->
    <v-main>
      <v-card>
        <v-btn v-show="e6 == 0 || e6 == 3" @click="e6 = 1" class="success">
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
            <v-btn color="primary" @click="e6 = 2" @focus="hidden = true">
              <v-icon>mdi-chevron-right</v-icon>
              <span>Next</span>
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
              <v-icon>mdi-content-save</v-icon>
              <span>Save</span>
            </v-btn>
            <v-btn text @click="e6 = 1">
              Cancel
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-card>
      <v-fab-transition>
        <v-btn
          v-show="hidden"
          color="pink"
          dark
          absolute
          bottom
          right
          fab
          @click="scrolltop"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-fab-transition>
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
  hidden = false;
  private e6 = 1;
  scrollltop() {
    window.scrollTo(0, document.body.scrollHeight);
  }
}
</script>
