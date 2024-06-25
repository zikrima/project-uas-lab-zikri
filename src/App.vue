<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-toolbar-title>WEATHER</q-toolbar-title>
        <q-btn flat to="/">Home</q-btn>
        <q-btn flat to="/tasks">Tugas Zikri Maarif</q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.custom-header {
  background-color: #808080; /* Warna abu-abu */
}
</style>
