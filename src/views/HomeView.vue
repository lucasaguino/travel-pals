<script setup>
import TripInfo from '../components/TripInfo.vue'
import TripForm from '../components/TripForm.vue'
</script>

<template>
  <div class="banner w-100 !p-10 shadow-inner flex justify-center">
    <TripForm class="!w-[50rem]" />
  </div>
  <div class="!m-3 ">
    <TripInfo 
      :place="'Barcelona'"
      :country="'Spain'"
      :start-date="'02/03/2024'"
      :end-date="'12/03/2024'"
      ></TripInfo>
  </div>
</template>

<style scoped>

.banner {
  background-image: url('@/assets/banner.jpg');
  background-size: cover;
  background-position: center;
}
</style>
