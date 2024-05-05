<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import { provide } from 'vue';
import users from '@/assets/all_travelers_data.json'
import BottomBar from './components/BottomBar.vue'

const user = users[0]

provide('user', user)
</script>

<template>
  <NavBar />

  <RouterView class="min-h-[39rem]"/>
  <div class="h-[3rem]"></div>
  <BottomBar />
</template>
