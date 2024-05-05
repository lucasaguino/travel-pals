<script setup>
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';

import { inject } from 'vue';



const user = inject('user')

const styleInfo = {
  icon: 'pi-map-marker',  
}


const events = user.trips.map((el) => ({ ...styleInfo, ...el}))

</script>

<template>
  <div
    class="bg-cover relative bg-center h-[20rem]"
    style="background-image: url(https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg);"
  >
    <div
      class="absolute w-full h-[5rem] bottom-0 bg-gradient-to-b from-white/0 to-white/100"
    >
    </div>
  </div>
  <div>
    <header class="flex flex-col items-center p-4">
      <h3 class="text-5xl text-center">{{ user.name }}</h3>
      <h5 class="!mt-3 text-2xl">Expert Traveller</h5>
      <p class="!mt-3">Visited <span class="!font-bold text-xl">22</span> cities and <span class="!font-bold text-xl">5</span> countries</p>
    </header>
  </div>
  <div class="flex justify-center">
    <Timeline :value="events" class=" max-w-lg customized-timeline">
      <template #marker="slotProps">
          <span class="flex w-[2rem] h-[2rem] items-center justify-center text-white rounded-full z-20 shadow-sm">
              <i :class="['pi text-fuchsia-600 dark:text-white',slotProps.item.icon]"></i>
          </span>
      </template>
      <template #content="slotProps">
          <RouterLink to="/trip-info">
            <Card class="!mb-6">
              <template #title>
                  {{ slotProps.item.city }}
              </template>
              <template #subtitle>
              <div class="flex justify-between">
                <span>{{ slotProps.item.date_start }} - {{ slotProps.item.date_end }}</span>
              </div>
              </template>
              <template #content>
                  <img v-if="slotProps.item.image" :src="`/images/product/${slotProps.item.image}`" width="200" class="shadow-sm" />
              </template>
            </Card>
          </RouterLink>
      </template>
    </Timeline>
  </div>
</template>

<style>

.customized-timeline .p-timeline-event-opposite {
  flex: 0;
  padding: 0;
}
</style>