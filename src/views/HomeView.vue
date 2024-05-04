<script setup>
import TripInfo from '../components/TripInfo.vue'
import Button from 'primevue/button';

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
  <RouterLink to="/tripCreation">
    <Button label="Add New Trip" />
  </RouterLink>

    <div class="card flex justify-content-center">
        <Button label="Submit" />
    </div>


</template>
