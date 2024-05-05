<script setup>
import TripInfo from '@/components/TripInfo.vue';
import { inject } from 'vue';
import users from '@/assets/all_travelers_data.json'
import { useRoute } from 'vue-router';

const route = useRoute()
const userId = route.params.id


const user = users[userId]

const styleInfo = {
  icon: 'pi-map-marker',  
}


const events = user.trips.map((el) => ({ ...styleInfo, ...el}))

</script>

<template>
  <div
    class="bg-cover relative bg-center h-[20rem]"
    style="background-image: url(/src/assets/photos/6/profile.jpg);"
  >
    <div
      class="absolute w-full h-[5rem] bottom-0 bg-gradient-to-b from-white/0 to-white/100"
    >
    </div>
  </div>
  <div>
    <header class="flex flex-col items-center p-4">
      <h3 class="text-5xl text-center">Paula Hays</h3>
      <h5 class="!mt-3 text-2xl">Beginner Traveller</h5>
      <p class="!mt-3">Visited <span class="!font-bold text-xl">22</span> cities and <span class="!font-bold text-xl">5</span> countries</p>
    </header>
  </div>
  <div class="!p-5 ">
    <h2 class="!font-bold !text-2xl !mb-6">Current trip</h2>
    <TripInfo 
      :place="'Barcelona'"
      :country="'Spain'"
      :start-date="'02/03/2024'"
      :end-date="'12/03/2024'"
      ></TripInfo>
  </div>

  <div class="!p-5 ">
    <h2 class="!font-bold !text-2xl !mb-6">Your past trips</h2>
    <TripInfo 
      :place="'Cairo'"
      :country="'Egypt'"
      :start-date="'12/02/2024'"
      :end-date="'22/02/2024'"
      completed
      ></TripInfo>

      <div class="!my-5"></div>

      <TripInfo 
      :place="'London'"
      :country="'United Kingdom'"
      :start-date="'23/02/2024'"
      :end-date="'03r/03/2024'"
      completed
      ></TripInfo>
  </div>
  

</template>

<style>

.customized-timeline .p-timeline-event-opposite {
  flex: 0;
  padding: 0;
}
</style>