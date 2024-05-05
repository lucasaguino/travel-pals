<script setup>
import TripForm from '../components/TripForm.vue'
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import users from '@/assets/all_travelers_data.json'

const images = [{
  source: 'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/07/14/basilica-de-la-sagrada-familia.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sagrada_Familia_1-4-24.jpg/280px-Sagrada_Familia_1-4-24.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sagrada_Familia_1-4-24.jpg/280px-Sagrada_Familia_1-4-24.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sagrada_Familia_1-4-24.jpg/280px-Sagrada_Familia_1-4-24.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sagrada_Familia_1-4-24.jpg/280px-Sagrada_Familia_1-4-24.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sagrada_Familia_1-4-24.jpg/280px-Sagrada_Familia_1-4-24.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},]

</script>

<template>

<div class="py-6 bg-gray-200">

  <h1 class="!ml-8 !font-bold text-4xl">See what your friends are up to!</h1>
  <Card class="rounded-lg !m-5">
    <template #title>
      <div class="flex justify-start items-center">
        <Avatar
          size="large"
          class="!mr-3"
          shape="circle"
          image="https://blog.photofeeler.com/wp-content/uploads/2017/12/linkedin-profile-picture.jpg"
        ></Avatar>
        <div>
          <h2 class="font-bold">Barcelona</h2>
          <h3 class="text-sm">{{ users[2].name }}</h3>
        </div>
      </div>
    </template>
    <template #subtitle></template>
    <template #content>
  
      <Carousel :value="images" :numVisible="3" :numScroll="3">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3">
                        <div class="relative !mx-0.5">
                            <img :src="slotProps.data.source" :alt="slotProps.data.name" class="w-full border-round aspect-[4/3]" />
                        </div>
                    </div>
                    
                </div>
            </template>
          </Carousel>
    </template>  
  
  </Card>
  <Card class="rounded-lg !m-5">
    <template #title>
      <div class="flex justify-start items-center">
        <Avatar
          size="large"
          class="!mr-3"
          shape="circle" 
          image="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
        ></Avatar>
        <div>
          <h2 class="font-bold">Switzerland</h2>
          <h3 class="text-sm">{{ users[4].name }}</h3>
        </div>
      </div>
    </template>
    <template #subtitle></template>
    <template #content>
  
      <Carousel :value="images" :numVisible="3" :numScroll="3">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3">
                        <div class="relative !mx-0.5">
                            <img :src="slotProps.data.source" :alt="slotProps.data.name" class="w-full border-round aspect-[4/3]" />
                        </div>
                    </div>
                    
                </div>
            </template>
          </Carousel>
    </template>  
  
  </Card>    
</div>



</template>

<style scoped>

.banner {
  background-image: url('@/assets/banner.jpg');
  background-size: cover;
  background-position: center;
}
</style>
