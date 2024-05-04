<script setup>
import Card from 'primevue/card'
import Divider from 'primevue/divider';

defineProps({
  place: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: String,
  },
  startDate: {
    required: true,
    type: String,
  },
  endDate: {
    required: true,
    type: String,
  },
  images: {
    required: false,
  }
})

</script>

<template>
  <Card class="rounded-md">
    <template #content>
      <div class="flex justify-between">
        <h2 class="font-bold">{{ place }}</h2>
        <h2>From: {{ startDate }} - To: {{ endDate }}</h2>
      </div>
      <div>
        <h2 class="font-bold opacity-75">{{ country }}</h2>
      </div>
      <Divider />
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate..</p>
      </div>
      <span class="font-bold" v-if="!images">There are no images available</span>
    </template>
  </Card>
</template>
