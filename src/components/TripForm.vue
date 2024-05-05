<script setup>

import Calendar from 'primevue/calendar';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';


import { ref, computed } from "vue";
import { useRouter } from 'vue-router';

const router = useRouter()



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

const dataFilled = computed(() => selectedCity.value && selectedCategory.value && dates.value)

function goToTrip() {
  router.push('/current-trip')
}

</script>

<template>
  <Card class="!rounded-lg !m-0.25 !my-auto !p-2">
      <template #title>
        <h1 class="!font-extrabold">Create your next adventure with us!</h1>
      </template>
      <template #content>
        <div class="flex flex-wrap">
            <p class="!font-bold basis-1/3">City </p>
            <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full" />
        </div>
        
        <div class="flex flex-wrap !my-5 ">
            <p class="!font-bold basis-1/3">Dates </p>
            <Calendar class="!w-100 calendar-input " v-model="dates" selectionMode="range" />
        </div>
        <div class="m-5  !my-5  flex flex-wrap">
            <p class=" !font-bold basis-1/3">Category </p>

            <Dropdown v-model="selectedCategory" :options="categories" optionLabel="name" placeholder="Select a Category" class="!w-full" />
        </div>

        <div class="flex justify-end">
        <Button label="Begin my trip" class="bg-violet-600" severity="info" @click="goToTrip" aria-label="Confirm" :disabled="!dataFilled" />
        </div>
      </template>
  </Card>


  
</template>

<style>

.calendar-input {
  width: 100% !important;
}

.calendar-input input {
  width: 100% !important;
}

</style>

