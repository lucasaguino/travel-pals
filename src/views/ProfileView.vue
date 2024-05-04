<script setup>
import Timeline from 'primevue/timeline';
import Card from 'primevue/card';
import Button from 'primevue/button';

const events = [{
  icon: 'pi-map-marker',
  location: 'Barcelona, Spain',
  startDate: '02/03/2024',
  endDate: '20/03/2024',
  type: 'Tourist',
  challengesCompleted: 12,
  totalChallenges: 15,
},
{
  icon: 'pi-map-marker',
  location: 'Barcelona, Spain',
  startDate: '02/03/2024',
  endDate: '20/03/2024',
  type: 'Tourist',
  challengesCompleted: 12,
  totalChallenges: 15,
},
{
  icon: 'pi-map-marker',
  location: 'Barcelona, Spain',
  startDate: '02/03/2024',
  endDate: '20/03/2024',
  type: 'Tourist',
  challengesCompleted: 9,
  totalChallenges: 15,
}]

</script>

<template>
  <div>
    <header class="flex flex-col items-center p-4">
      <h3 class="text-5xl">Michelle Tourism</h3>
      <h5 class="mt-2 text-2xl">Expert Traveller</h5>
      <p class="mt-3">Visited <span class="font-bold text-xl">22</span> cities and <span class="font-bold text-xl">5</span> countries</p>
    </header>
  </div>
  <div class="flex justify-center">
    <Timeline :value="events" class=" max-w-lg customized-timeline">
      <template #marker="slotProps">
          <span class="flex w-[2rem] h-[2rem] items-center justify-center text-white rounded-full z-20 shadow-sm">
              <i :class="['pi',slotProps.item.icon]"></i>
          </span>
      </template>
      <template #content="slotProps">
          <RouterLink to="/summary">
            <Card class="mt-3">
              <template #title>
                  {{ slotProps.item.location }}
              </template>
              <template #subtitle>
              <div class="flex justify-between">
                <span>{{ slotProps.item.startDate }} - {{ slotProps.item.endDate }}</span>
                <span class="font-bold">{{ slotProps.item.challengesCompleted }} / {{ slotProps.item.totalChallenges }} challenges</span>
              </div>
              </template>
              <template #content>
                  <img v-if="slotProps.item.image" :src="`/images/product/${slotProps.item.image}`" width="200" class="shadow-sm" />
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
                      neque quas!
                  </p>
                  <Button label="Read more" text></Button>
              </template>
            </Card>
          </RouterLink>
      </template>
    </Timeline>
  </div>
</template>

<style>

.customized-timeline .p-timeline-event-opposite {
  flex: 0;
}
</style>