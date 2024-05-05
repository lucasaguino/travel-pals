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
    

      <Card class="bg-cover bg-center m-10 min-h-[30rem] rounded-md" style="margin: 10px; background-image: url(/src/assets/photos/berlin/berlin4.jpeg);">
        
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
        <p>
          Berlin Cathedral, also known as the Evangelical Supreme Parish and Collegiate Church, is a monumental German Protestant church and dynastic tomb (House of Hohenzollern) on the Museum Island in central Berlin. Having its origins as a castle chapel for the Berlin Palace, several structures have served to house the church since the 15th century. The present collegiate church was built from 1894 to 1905 by order of Emperor William II according to plans by Julius Raschdorff in Renaissance and Baroque Revival styles. The listed building is the largest Protestant church in Germany and one of the most important dynastic tombs in Europe. In addition to church services, the cathedral is used for state ceremonies, concerts and other events. 
        </p>
      </template>
    </Card>

  </div>
</template>