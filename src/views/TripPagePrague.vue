<script setup>
import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';



</script>
<template>
  <div>
    <header class="h-[15rem] relative text-white flex w-100 justify-around items-center p-4 bg-cover bg-center"  style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Prague_%286365119737%29.jpg/800px-Prague_%286365119737%29.jpg);">
      <div class="absolute w-full h-full bg-black/40"></div>
      <div class="z-20 flex items-center">
        <a class="!mr-5" href="https://www.google.es/maps">
          <i class="text-3xl pi pi-map-marker"></i>
        </a>
        <div>
          <h3 class="text-4xl">Prage</h3>
          <h5 class="mt-2 text-xl">18/05/2024 - 31/05/2024</h5>
        </div>
        <div class="z-10 h-[4rem] w-full bottom-0 left-0 absolute bg-gradient-to-b from-white/0 to-white/100"></div>
      </div>
    </header>    
    <RouterLink to="/point-of-interest/prague-castle">
    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Prague Castle</h3>
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

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/032/741/original/78c3ca67b8c6f5ff0495e4dc3584b943/article-czech-republic-st-vitus-cathedral.jpg)"></div>

        </div>
        
      </template>
    </Card>
  </RouterLink>
    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Charles Bridge</h3>
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

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://www.pragueresidences.com/praguelocally/wp-content/uploads/2018/02/Charles-Bridge-c.jpg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Old Town Square</h3>
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

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://mywowo.net/media/images/cache/praga_piazza_citta_vecchia_01_piazza_jpg_1200_630_cover_85.jpg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">St. Vitus Cathedral</h3>
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

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/St_Vitus_Prague_September_2016-21.jpg/1200px-St_Vitus_Prague_September_2016-21.jpg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Astronomical Clock</h3>
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

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://cdn-vsh.prague.eu/object/188/01c.jpg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Wenceslas Square</h3>
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

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(https://media.timeout.com/images/105246863/image.jpg)"></div>

        </div>
        
      </template>
    </Card>

  </div>
</template>