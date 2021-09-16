<template>
  <v-app>
    <v-main>
      <v-card>
        <v-card-header class="text h2">
          <v-icon>mdi-account-circle</v-icon>
          <span>Personal Information</span>
        </v-card-header>
        <v-card-text>
          <v-text-field label="Name"></v-text-field>
          <v-text-field label="Father Name"></v-text-field>
          <v-text-field label="Date of Birth" type="date"></v-text-field>
          <v-text-field label="Email" type="email"></v-text-field>
          <v-text-field label="Country" type="dropdown"></v-text-field>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>
