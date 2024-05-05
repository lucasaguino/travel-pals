<script setup>
import { RouterLink } from 'vue-router';
import Avatar from 'primevue/avatar'
import { inject } from 'vue';
import { computed } from 'vue';

const user = inject('user')

const name = computed(() => user.name.split(" ")[0])

</script>

<template>
  <div 
    :class="['w-100 p-3 flex justify-center items-center',
      'bg-violet-600']"
  >
    <RouterLink to="/">
      <img src="/src/assets/icon.png" class="h-[3rem]">
    </RouterLink>
  </div>
</template>