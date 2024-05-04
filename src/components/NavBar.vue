<script setup>
import { RouterLink } from 'vue-router';
import Avatar from 'primevue/avatar'

</script>

<template>
  <div 
    :class="['w-100 p-3 flex justify-end items-center',
      'bg-gradient-to-b from-indigo-500 to-purple-300']"
  >
    <RouterLink class="flex items-center" to="/profile">
      <Avatar 
        class="!mr-4 shadow-md"
        image="https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg" size="xlarge" shape="circle" 
      />
      <p class="!font-bold text-black text-lg">Michelle</p>
    </RouterLink>
  </div>
</template>