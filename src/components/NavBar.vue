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
    :class="['w-100 p-3 flex justify-between items-center',
      'bg-gradient-to-b from-indigo-500 to-purple-300']"
  >
    <RouterLink to="/">
      <i class="pi pi-send text-4xl text-white !ml-1"></i>
    </RouterLink>
    <RouterLink class="flex items-center" to="/profile">
      <Avatar 
        class="!mr-4 shadow-md"
        image="https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg" size="xlarge" shape="circle" 
      />
    </RouterLink>
  </div>
</template>