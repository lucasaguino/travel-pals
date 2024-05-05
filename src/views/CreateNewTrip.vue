<script setup>
import TripForm from '../components/TripForm.vue'
</script>

<template>
  <div class="banner w-100 !h-100 !p-10 shadow-inner flex justify-center">
    <TripForm class="!w-[50rem]" />
  </div>
</template>

<style scoped>

.banner {
  background-image: url('@/assets/banner.jpg');
  background-size: cover;
  background-position: center;
}
</style>
