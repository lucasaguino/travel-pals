<script setup>
import TripInfo from '../components/TripInfo.vue'

</script>

<template>
  <div>
    <TripInfo 
      :place="'Barcelona'"
      :country="'Spain'"
      :start-date="'02/03/2024'"
      :end-date="'12/03/2024'"
      ></TripInfo>
  </div>
</template>
