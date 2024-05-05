<script setup>
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';



</script>
<template>
  <div>
    <header class="h-[15rem] relative text-white flex w-100 justify-around items-center p-4 bg-cover bg-center"  style="background-image: url(https://media.traveler.es/photos/63838947050e0f92cd80c982/16:9/w_2560%2Cc_limit/GettyImages-1392907424.jpg);">
      <div class="absolute w-full h-full bg-black/40"></div>
      <div class="z-20 flex items-center">
        <a class="!mr-5" href="https://www.google.es/maps">
          <i class="text-3xl pi pi-map-marker"></i>
        </a>
        <div>
          <h3 class="text-4xl">Barcelona</h3>
          <h5 class="mt-2 text-xl">02/03/2024 - 03/03/2024</h5>
        </div>
        <div class="z-10 h-[4rem] w-full bottom-0 left-0 absolute bg-gradient-to-b from-white/0 to-white/100"></div>
      </div>
    </header>
    <RouterLink to="/summary">
      <Card class="!p-0 !m-5 poi-card rounded-md">
        <template #content>
          <div  class="flex flex-row ">

            <div class="basis-2/3  !m-5">
            <h3 class="text-lg mr-3 !font-bold">Sagrada Familia</h3>
            <Divider />
            <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

            <h3 class="text-md mr-3">Who can you find along the way?</h3>
            <Divider />
            <div class="flex justify-start items-center !mt-4">
            <AvatarGroup class="!mr-3">
              <Avatar 
                style="z-index: 0;"
                image="https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg" size="medium" shape="circle" 
              />
              <Avatar 
                style="margin-left: -14px;z-index: 1;"
                image="https://i.pinimg.com/736x/f8/66/8e/f8668e5328cfb4938903406948383cf6.jpg" size="medium" shape="circle" 
              />
              <Avatar 
              style="margin-left: -14px;z-index: 2;"
                image="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/9.JPG-nggid03122-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG" size="medium"  shape="circle" 
              />
              <Avatar
                style="margin-left: -14px;z-index: 3;"
                size="medium" shape="circle"
                label="+2"
              />
            </AvatarGroup>          
            <span><span class="!font-bold">Sarah, James, Jeaninne</span> and <span class="!font-bold">2</span> more</span>
          </div>
          </div>

          <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/07/14/basilica-de-la-sagrada-familia.jpeg)"></div>

          </div>
          
        </template>
      </Card>
    </RouterLink>
  </div>
</template>