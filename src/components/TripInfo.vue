<script setup>
import Card from 'primevue/card'
import Divider from 'primevue/divider';

defineProps({

  country: {
    required: true,
    type: String,
  },

})

</script>

<template>
  <Card>
    <template #content>
      <h2 class="font-bold">{{ country }}</h2>
      <Divider />
    </template>
  </Card>
</template>
