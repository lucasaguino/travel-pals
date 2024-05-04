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

const dates = ref();






</script>

<template>
  <div>
    <div class="flex items-center place-content-around m-5">
      <div class="text-center">

        <h1 class="font-bold text-2xl">New Trip</h1>
      
      </div>
    </div>
    

    <form action="">
      <Card class="!rounded-lg !m-5">
          <template #content>
            <div class="m-5  p-2 flex place-content-between">
                <p class="basis-1/3">Destination </p>

                <div class="basis-2/3 card flex justify-content-center">
                    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-14rem" />
                </div>

            </div>
            
            <div class="m-5  p-2 flex place-content-between ">
                <p class="basis-1/3">Dates </p>
                <Calendar class="basis-2/3" v-model="date"  selectionMode="range" />
            </div>

            <div class="m-5  p-2 flex place-content-between">
                <p class="basis-1/3">Category </p>

                <div class="basis-2/3 card flex justify-content-center">
                    <Dropdown v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Select a Category" class="w-full md:w-14rem" />
                </div>
            </div>
            <div class="p-5 flex place-content-around fixed bottom-0 left-0 right-0">
              
              <RouterLink to="/">            
                <Button icon="pi pi-times" severity="danger" text raised rounded aria-label="Cancel" />
              </RouterLink>

              <RouterLink to="/currentTrip">
                <Button icon="pi pi-check" severity="success" text raised rounded aria-label="Confirm" />
              </RouterLink>

            </div>
          </template>
      </Card>

        
    </form>
  </div>


  
</template>

