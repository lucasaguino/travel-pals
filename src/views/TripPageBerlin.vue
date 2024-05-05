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
          <h3 class="text-4xl">Berlin</h3>
          <h5 class="mt-2 text-xl">18/05/2024 - 31/05/2024</h5>
        </div>
        <div class="z-10 h-[4rem] w-full bottom-0 left-0 absolute bg-gradient-to-b from-white/0 to-white/100"></div>
      </div>
    </header>    
    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Berlin Wall Memorial</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfQVsavMhO0GRho8eTKGOpUyyDgmQx8mA6B6M6ovOcA&s" size="medium"  shape="circle" 
            />
            <Avatar 
              style="margin-left: -14px;z-index: 2;"
              image="https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/cache/9.JPG-nggid03122-ngg0dyn-591x591-00f0w010c010r110f110r010t010.JPG" size="medium" shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Claudia, Sarah</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(src/assets/photos/berlin/berlin1.jpeg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Reichstag Building</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(src/assets/photos/berlin/berlin2.jpeg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Brandenburg Gate</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" size="medium"  shape="circle" 
            />
            <Avatar 
              style="margin-left: -14px;z-index: 2;"
              image="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" size="medium" shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Travis, Jake</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(src/assets/photos/berlin/berlin3.jpeg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Berlin Cathedral</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" size="medium"  shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Carlos</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(src/assets/photos/berlin/berlin4.jpeg)"></div>

        </div>
        
      </template>
    </Card>

    <Card class="!p-0 !m-5 poi-card rounded-md">
      <template #content>
        <div  class="flex flex-row ">

          <div class="basis-2/3  !m-5">
          <h3 class="text-lg mr-3 !font-bold">Zoo Berlin</h3>
          <Divider />
          <p class="!mt-1 !mb-4">Take a photo and show it to the rest of the world!</p>

          <h3 class="text-md mr-3">Who can you find along the way?</h3>
          <Divider />
          <div class="flex justify-start items-center !mt-4">
          <AvatarGroup class="!mr-3">
            <Avatar 
             style="margin-left: -14px;z-index: 1"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToZ_scdbGjP0llkB1cDa5OohFOjJqIawGOmh34Xov_ug&s" size="medium"  shape="circle" 
            />
            <Avatar 
              style="margin-left: -14px;z-index: 2;"
              image="https://media.licdn.com/dms/image/D4E03AQH_8pUShgI5og/profile-displayphoto-shrink_800_800/0/1696427535833?e=2147483647&v=beta&t=biF06J-_wBgRWs05aQf7nM2TT1PKGur2FFS9ak5TG-E" size="medium" shape="circle" 
            />
          </AvatarGroup>          
          <span class="!font-bold">Marcus, Helen</span>
        </div>
        </div>

        <div class="basis-1/3 h-[12rem] bg-cover bg-center rounded-r-md" style="background-image: url(src/assets/photos/berlin/berlin5.jpeg)"></div>

        </div>
        
      </template>
    </Card>

  </div>
</template>
