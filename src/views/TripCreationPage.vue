<script setup>

</script>
<template>
  <div>
    <div class="flex items-center place-content-around m-5">
      <div class="text-center">

        <h1 class="font-bold text-2xl">New Trip</h1>
      
      </div>
    </div>
    

    <form action="">
        <div class="border-solid m-5 border-2 p-2 flex place-content-between">
            <p>Destination: </p>
            <input class="border-solid border-2" type="text">
        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-between ">
            <p>Arrival date: </p>
            <input type="date">
        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-between">
            <p>Departure date: </p>
            <input type="date">
        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-between">
            <p>Category: </p>
            <input class="border-solid border-2" type="text">
        </div>
        <div class="border-solid m-5 border-2 p-2 flex place-content-center">
        
            <input type="submit" value="Create Trip">
        </div>
    </form>

  </div>
</template>