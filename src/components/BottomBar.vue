<script setup>
import { RouterLink } from 'vue-router';
import { inject } from 'vue';
import { computed } from 'vue';

const user = inject('user')

const name = computed(() => user.name.split(" ")[0])

</script>

<template>
  <div 
    :class="['!w-full p-3 !px-20 flex justify-between items-center',
      '!z-50 fixed bottom-0 left-0 bg-white border-t-2']"
  >
    <RouterLink class="flex items-center" to="/">
      <Button icon="pi pi-home text-3xl" class=""  severity="secondary" rounded text/>
    </RouterLink>
    <RouterLink class="flex items-center" to="/new-trip">
      <Button icon="pi pi-plus-circle text-3xl" class=""  severity="secondary" rounded  text/>
    </RouterLink>
    <RouterLink class="flex items-center" to="/profiles/0">
      <Button icon="pi pi-user text-3xl" class=""  severity="secondary" rounded  text/>
    </RouterLink>
  </div>
</template>