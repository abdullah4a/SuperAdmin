<template>
  <v-app>
    <!-- Steppers Start in here -->
    <v-card>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Select an app
          <small>Summarize if needed</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 2">
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Configure analytics for this app
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
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
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
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
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 1">
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-card>
    <!--  ******************* -->
    <!-- Steppers Ends in here -->
    <!--  ******************* -->
    <!--  ******************* -->
    <!--  ******************* -->
    <!--  ******************* -->
    <!--  ******************* -->
    <!-- Dialogs Starts in here -->
    <!--  ******************* -->

    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-divider></v-divider>
        <v-btn
          color="indigo"
          class="mx-5 rounded"
          dark
          v-bind="attrs"
          v-on="on"
          @click="register = true"
        >
          <v-icon>mdi-account-plus</v-icon>
          <span>Register</span>
        </v-btn>
        <v-btn
          color="indigo"
          dark
          v-bind="attrs"
          v-on="on"
          @click="register = false"
        >
          <v-icon>mdi-login</v-icon>
          <span>Login</span>
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 lighten-2" v-if="register === false">
          <span>Login</span>
          <v-spacer></v-spacer>
          <v-icon>mdi-account</v-icon>
        </v-card-title>
        <v-card-title class="text-h5 lighten-2" v-else>
          <span>Register</span>
          <v-spacer></v-spacer>
          <v-icon>mdi-account-plus</v-icon>
        </v-card-title>
        <v-card-text v-if="register === false">
          <v-text-field label="Username"></v-text-field>
          <v-text-field label="Passwword" counter="10" type="password">
          </v-text-field>
        </v-card-text>

        <v-card-text v-else>
          <v-text-field label="Full Name"></v-text-field>
          <v-text-field label="Email" type="email"></v-text-field>
          <v-text-field label="Username"></v-text-field>
          <v-text-field label="Passwword" counter="10" type="password">
          </v-text-field>
          <v-text-field label="Confirm Passwword" counter="10" type="password">
          </v-text-field>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
            v-if="register === true"
          >
            <v-icon>mdi-account-plus</v-icon>
            <span>Register</span>
          </v-btn>
          <v-btn
            color="success"
            text
            @click="dialog = false"
            v-if="register === false"
          >
            <v-icon>mdi-login</v-icon>
            <span>Login</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!--  ******************* -->
    <!-- Dialogs Ends in here -->
    <!--  ******************* -->
    <!--  ******************* -->
    <!--  ******************* -->
    <!--  ******************* -->
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class Home extends Vue {
  private dialog = false;
  private register = false;
  private e6 = 1;
}
</script>
