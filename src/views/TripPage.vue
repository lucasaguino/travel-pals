<script setup>
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import { useRoute } from 'vue-router';


const route = useRoute()

const userId = route.params.id
const tripId = route.params.trip



</script>
<template>
    <header class="text-white flex w-100 justify-around items-center relative p-4 bg-cover bg-center"  style="background-image: url(https://media.traveler.es/photos/63838947050e0f92cd80c982/16:9/w_2560%2Cc_limit/GettyImages-1392907424.jpg);">
      <div class="absolute w-full h-full bg-black/40"></div>
      <div class="z-20 flex items-center">
        <a class="!mr-5" href="https://www.google.es/maps">
          <i class="text-3xl pi pi-map-marker"></i>
        </a>
        <div>
          <h3 class="text-4xl">Barcelona</h3>
          <h5 class="mt-2 text-xl">02/03/2024 - 03/03/2024</h5>
        </div>

      </div>
    </header>
    <div>
      <RouterLink to="/summary">
        <Card class="!p-0 !m-5 poi-card rounded-md">
          <template #content>
            <div  class="flex flex-row ">

              <div class="basis-2/3  !m-5">
                <div class="flex justify-start items-center">
                  <h3 class="text-lg mr-3 !font-bold">Sagrada Familia</h3>

                  <div class="text-white bg-green-500 border border-green-500 rounded-full flex items-center justify-center !m-2 size-6">
                    <i class="pi pi-check"></i>
                  </div>
                </div>    

                <Divider />
                
                <p class="!mt-2">Other useful info?</p>
              
            </div>

            <div class="basis-1/3 h-[8rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/07/14/basilica-de-la-sagrada-familia.jpeg)"></div>

            </div>
            
          </template>
        </Card>

      </RouterLink>
    </div>
</template>

<style>
.poi-card .p-card-body {
  padding: 0 !important;
}

.poi-card .p-card-content {
  padding: 0 !important;
}



</style>