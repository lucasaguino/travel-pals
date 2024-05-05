<script setup>
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';



</script>
<template>
  <div>
    <header class="h-[15rem] relative text-white flex w-100 justify-around items-center p-4 bg-cover bg-center"  style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Cairo_%286365119737%29.jpg/800px-Cairo_%286365119737%29.jpg);">
      <div class="absolute w-full h-full bg-black/40"></div>
      <div class="z-20 flex items-center">
        <a class="!mr-5" href="https://www.google.es/maps">
          <i class="text-3xl pi pi-map-marker"></i>
        </a>
        <div>
          <h3 class="text-4xl">Cairo</h3>
          <h5 class="mt-2 text-xl">18/05/2024 - 31/05/2024</h5>
        </div>
        <div class="z-10 h-[4rem] w-full bottom-0 left-0 absolute bg-gradient-to-b from-white/0 to-white/100"></div>
      </div>
    </header>   
     
    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Cairo Tower</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/9.JPG-nggid03122-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG" size="medium"  shape="circle" 
            />
            <Avatar 
              style="margin-left: -14px;z-index: 2;"
              image="https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg" size="medium" shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Sarah, James</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(/src/assets/photos/6/Cairo/cairo_tower.jpg)"></div>

        </div>
        
      </template>
    </Card>


  <RouterLink to="/point-of-interest/pyramids">

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Pyramids of Giza</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/9.JPG-nggid03122-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG" size="medium"  shape="circle" 
            />
            <Avatar 
              style="margin-left: -14px;z-index: 2;"
              image="https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg" size="medium" shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Sarah, James</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(/src/assets/photos/6/Cairo/pyramids_of_giza.jpg)"></div>

        </div>
        
      </template>
    </Card>
</RouterLink>
    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Memphis</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/9.JPG-nggid03122-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG" size="medium"  shape="circle" 
            />
            <Avatar 
              style="margin-left: -14px;z-index: 2;"
              image="https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg" size="medium" shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Sarah, James</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(/src/assets/photos/6/Cairo/memphis.jpg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Saladin Citadel</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/9.JPG-nggid03122-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG" size="medium"  shape="circle" 
            />
            <Avatar 
              style="margin-left: -14px;z-index: 2;"
              image="https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg" size="medium" shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Sarah, James</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(/src/assets/photos/6/Cairo/saladin_citadel.jpg)"></div>

        </div>
        
      </template>
    </Card>

  </div>
</template>