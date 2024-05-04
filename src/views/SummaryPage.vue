<script setup>
import FileUpload from 'primevue/fileupload';


</script>
<template>
  <div>
    <div class="flex items-center place-content-around m-5">
      <a href="https://www.google.com/maps" ><i class="pi pi-map-marker text-3xl" style="color: slateblue"></i></a>
      <div class="text-center">

        <h1 class="font-bold text-2xl">Berlin Cathedral</h1>
        <h3>Berlin, Germany</h3>
      
      </div>
      <i class="pi pi-check-circle text-3xl text-green-600"></i>
    </div>
    

      
      
    <Card style="margin: 10px;">
        <template #title>Photo</template>
        <template #content>

    <div class="card flex justify-content-center">
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSksdSGqrVSipcqrmyQk4tLjsiTWw-x2vga6mw438gw&s" alt="Image" width="250" />
    </div>

          
        </template>
    </Card>

    <Card style="margin: 10px;">
        <template #title>Information</template>
        <template #content>
          <p>Visited on:</p>
          <p>Visited with:</p>
        </template>
    </Card>

    <div class="border-solid m-5 border-2 p-2">
      <h3 class="text-center text-lg">Description</h3>
     
    </div>

  </div>
</template>