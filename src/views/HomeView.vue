<script setup>
import TripInfo from '../components/TripInfo.vue'
import NewAdventureButton from '../components/NewAdventureButton.vue'

</script>

<template>
  <div>
    <i class="pi pi-bell-slash"></i>
    <TripInfo 
      :place="'Barcelona'"
      :country="'Spain'"
      :start-date="'02/03/2024'"
      :end-date="'12/03/2024'"
      ></TripInfo>
      <NewAdventureButton></NewAdventureButton>
  </div>
</template>
