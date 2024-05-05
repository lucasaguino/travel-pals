<script setup>
import TripForm from '../components/TripForm.vue'
import Carousel from 'primevue/carousel';
import Card from 'primevue/card';
import users from '@/assets/all_travelers_data.json'

const images = [{
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
  <div>
    <Card class="max-w-[0rem]">
      <template #content>
        <div class="!p-3">
          <h3 class="!font-bold text-md">Copenhague</h3>
          <h3 class="text-sm !mb-3">{{users[2].name}}</h3>
          <Carousel :value="images" :numVisible="3" circular  :numScroll="1">
            <template #item="slotProps">
              <p>test</p>
            </template>
          </Carousel>
        </div>
      </template>
    </Card>
    <div class="banner w-100 !p-10 shadow-inner flex justify-center">
      <TripForm class="!w-[50rem]" />
    </div>
  </div>
</template>

<style scoped>

.banner {
  background-image: url('@/assets/banner.jpg');
  background-size: cover;
  background-position: center;
}
</style>
