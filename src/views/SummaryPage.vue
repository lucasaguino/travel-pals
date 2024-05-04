<script setup>

</script>
<template>
  <div>
    <div class="flex items-center place-content-around !m-5">
      <a href="https://www.google.com/maps" ><i class="pi pi-map-marker text-3xl" style="color: slateblue"></i></a>
      <div class="text-center">

        <h1 class="font-bold text-2xl">Berlin Cathedral</h1>
        <h3>Berlin, Germany</h3>
      
      </div>
      <i class="pi pi-check-circle text-3xl text-green-600"></i>
    </div>
    

      <Card class="bg-cover bg-center m-10 min-h-60 rounded-md" style="margin: 10px; background-image: url(https://www.berlin.de/binaries/asset/image_assets/6431736/source/1643977486/1000x500/);">
        
      </Card>


    <Card class="rounded-md" style="margin: 10px;">
        <template #content>
          <p>Visited on:</p>
          <p>Visited with:</p>
        </template>
    </Card>

    <Card class="rounded-md" style="margin: 10px;">
      <template #title>Description</template>
      <template #content>
        <p>wiki description</p>
      </template>
    </Card>

  </div>
</template>