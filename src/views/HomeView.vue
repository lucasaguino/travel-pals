<script setup>
import TripInfo from '../components/TripInfo.vue'
import Button from 'primevue/button';

</script>

<template>
    <div class="!m-3 ">
      <TripInfo 
        :place="'Barcelona'"
        :country="'Spain'"
        :start-date="'02/03/2024'"
        :end-date="'12/03/2024'"
        ></TripInfo>
    </div>

      <div class="flex justify-center fixed bottom-0 left-0 right-0 p-4">
        <RouterLink to="/tripCreation">
          <Button label="Add New Trip" />
        </RouterLink>
      </div>
  

  


</template>
