<script setup>

</script>
<template>
  <div>
    <div class="flex items-center place-content-around !m-5">
      <a href="https://maps.app.goo.gl/As7giV7fZBsJP8Sy9" ><i class="pi pi-map-marker text-3xl" style="color: slateblue"></i></a>
      <div class="text-center">

        <h1 class="font-bold text-2xl">Berlin Cathedral</h1>
        <h3>Berlin, Germany</h3>
      
      </div>
      <div></div>
    </div>
    

      <Card class="bg-contain bg-center bg-no-repeat m-10 min-h-60 rounded-md" style="margin: 10px; background-image: url(data:image/png;base64,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);">
        
      </Card>


    <Card class="rounded-md" style="margin: 10px;">
        <template #content>
          <p class="!font-bold">Not visited yet</p>
        </template>
    </Card>

    <Card class="rounded-md" style="margin: 10px;">
      <template #title>Description</template>
      <template #content>
        <p>Yet to unlock</p>
      </template>
    </Card>

  </div>
</template>