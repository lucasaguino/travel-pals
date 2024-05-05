<script setup>
import TripForm from '../components/TripForm.vue'
import { RouterLink } from 'vue-router';
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import users from '@/assets/all_travelers_data.json'

const images = [{
  source: 'src/assets/photos/barcelona/bcn1.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/barcelona/bcn2.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/barcelona/bcn3.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/barcelona/bcn4.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/barcelona/bcn5.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/barcelona/bcn6.jpg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},]

const images2 = [{
  source: 'src/assets/photos/berlin/berlin1.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/berlin/berlin2.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/berlin/berlin3.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/berlin/berlin4.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/berlin/berlin5.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},]


const images3 = [{
  source: 'src/assets/photos/newyork/ny1.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/newyork/ny2.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/newyork/ny3.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},
{
  source: 'src/assets/photos/newyork/ny4.jpeg',
  person: 2,
  icon: 'https://media.licdn.com/dms/image/D4D12AQGsWiQQo-hEew/article-cover_image-shrink_720_1280/0/1705940048112?e=2147483647&v=beta&t=Dm3TYa8aaImrrYHEksUYyCuPe0mRjKNlrKcNMnKjlXc'
},]

</script>

<template>

<div class="py-6 bg-gray-200">

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
          <h3 class="text-sm">Peter Alexander</h3>
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
                            <img :src="slotProps.data.source" :alt="slotProps.data.name" class="w-full border-round" />
                        </div>
                    </div>
                    
                </div>
            </template>
          </Carousel>
    </template>  
  
  </Card>
    

  <Card class="rounded-lg !m-5">
    <template #title>
  <RouterLink to="/trip-page-berlin">

      <div class="flex justify-start items-center">
        <Avatar
          size="large"
          class="!mr-3"
          shape="circle" 
          image="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/short/linkedin-profile-picture-maker/dummy_image/thumb/004.webp"
        ></Avatar>
        <div>
          <h2 class="font-bold">Berlin</h2>
          <h3 class="text-sm">Justin Schmitt</h3>
        </div>
      </div>
  </RouterLink>

    </template>
    <template #subtitle></template>
    <template #content>
  
      <Carousel :value="images2" :numVisible="3" :numScroll="3">
            <template #item="slotProps">
              <div class="border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3">
                        <div class="relative !mx-0.5">
                            <img :src="slotProps.data.source" :alt="slotProps.data.name" class="w-full border-round" />
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
  
      <Carousel :value="images3" :numVisible="3" :numScroll="3">
            <template #item="slotProps">
                <div class="border-1 surface-border border-round m-2  p-3">
                    <div class="mb-3">
                        <div class="relative !mx-0.5">
                            <img :src="slotProps.data.source" :alt="slotProps.data.name" class="w-full border-round" />
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
