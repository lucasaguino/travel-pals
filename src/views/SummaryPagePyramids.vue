<script setup>
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';

</script>
<template>
  <div>
    <div class="flex items-center place-content-around !m-5">
      <a href="https://maps.app.goo.gl/4qnKqTrN1oFZUKjDA" ><i class="pi pi-map-marker text-3xl" style="color: slateblue"></i></a>
      <div class="text-center">

        <h1 class="font-bold text-2xl">Pyramids of Giza</h1>
        <h3>Cairo, Egypt</h3>
      
      </div>
      <i class="pi pi-check-circle text-3xl text-green-600"></i>
    </div>
    

      <Card class="bg-cover bg-center m-10 min-h-60 rounded-md" style="margin: 10px; background-image: url(https://lp-cms-production.imgix.net/2020-11/GettyRF_1085205362.jpg?auto=format&w=1440&h=810&fit=crop&q=75);">
        
      </Card>


    <Card class="rounded-md" style="margin: 10px;">
        <template #content>
          <p>Visited on: 02/03/2024</p>
          <p class="!mt-4">Visited with</p>
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
        </template>
    </Card>

    <Card class="rounded-md" style="margin: 10px;">
      <template #title>Description</template>
      <template #content>
        <p class="text-justify">The Great Pyramid of Giza is the largest Egyptian pyramid and served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. Built c. 2600 BC, over a period of about 27 years, the pyramid is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact. It is the most famous monument of the Giza pyramid complex, which is part of the UNESCO World Heritage Site "Memphis and its Necropolis". It is situated at the northeastern end of the line of the three main pyramids at Giza. </p>
      </template>
    </Card>

  </div>
</template>