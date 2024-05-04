<script setup>
import Card from 'primevue/card';
import Divider from 'primevue/divider';
</script>
<template>
    <header class="flex w-100 justify-around items-center p-4">
      <a href="https://www.google.es/maps">
        <i class="text-3xl pi pi-map-marker"></i>
      </a>
      <div>
        <h3 class="text-4xl">Barcelona</h3>
        <h5 class="mt-2 text-xl">02/03/2024 - 03/03/2024</h5>
      </div>
      <div></div>
    </header>
    <div>
      <Card>
        <template #content>
          <div>
            <div class="flex justify-start items-center">
              <h3 class="text-lg mr-3">Sagrada Familia</h3>
              <i class="pi pi-check accent-green-500"></i>
            </div>        
            <Divider />
            <p>Other useful info?</p>
            
          </div>

        </template>
      </Card>
    </div>
</template>