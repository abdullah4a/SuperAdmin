<template>
  <v-app>
    <v-main>
      <v-card>
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
              <v-text-field
                label="Confirm Passwword"
                counter="10"
                type="password"
              >
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
      </v-card>
      <v-card>
        <steppers /> 
      </v-card>
    </v-main>
    <!--  ******************* -->
    <!-- Dialogs Ends in here -->
    <!--  ******************* -->
    <!--  ******************* -->
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import steppers from "./steppers.vue";
@Component({
  components: {
    steppers,
  },
})
export default class Home extends Vue {
  private dialog = false;
  private register = false;
  private e6 = 1;
  private details={};
}
</script>
