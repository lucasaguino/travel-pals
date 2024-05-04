<script setup>

import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';


import { ref } from "vue";

  const selectedCity = ref();
  const cities = ref([
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ]);

  const selectedCategory = ref();
  const categories = ref([
      { name: 'Tourist', code: 'TOUR' },
      { name: 'Business', code: 'BS' },
      { name: 'Other', code: 'OTH' }
  ]);


</script>

<template>
  <div>
    <div class="flex items-center place-content-around m-5">
      <div class="text-center">

        <h1 class="font-bold text-2xl">New Trip</h1>
      
      </div>
    </div>
    

    <form action="">
        <div class="border-solid m-5 border-2 p-2 flex place-content-between">
            <p>Destination: </p>

            <div class="card flex justify-content-center">
                <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
            </div>

        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-between ">
            <p>Arrival date: </p>
            <Calendar v-model="date" />
        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-between">
            <p>Departure date: </p>
            <Calendar v-model="date" />
        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-between">
            <p>Category: </p>

            <div class="card flex justify-content-center">
                <Dropdown v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Select a Category" class="w-full md:w-14rem" />
            </div>
        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-around">
          
          <RouterLink to="/">
            <Button icon="pi pi-times " style="color : red" raised rounded aria-label="Cancel" />
          </RouterLink>

          <RouterLink to="/currentTrip">
            <Button icon="pi pi-check" style="color : green" raised rounded aria-label="Filter" />
          </RouterLink>

        </div>
    </form>
  </div>


  
</template>

