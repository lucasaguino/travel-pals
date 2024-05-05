<script setup>
import { RouterLink } from 'vue-router';
import Card from 'primevue/card'
import Divider from 'primevue/divider';
import AvatarGroup from 'primevue/avatargroup';   //Optional for grouping
import Avatar from 'primevue/avatar';
import ProgressBar from 'primevue/progressbar';


defineProps({
  place: {
    required: true,
    type: String,
  },
  country: {
    required: true,
    type: String,
  },
  startDate: {
    required: true,
    type: String,
  },
  endDate: {
    required: true,
    type: String,
  },
  images: {
    required: false,
  },
  completed: {
    type: Boolean,
  },
  link: {
    type: String,
  }
})

</script>

<template>
  <RouterLink :to="link">
    <Card class="rounded-md">
      <template #content>
        <div class="flex justify-between">
          <h2 class="!font-bold">{{ place }}</h2>
          <h2><span class="!font-bold">From:</span> {{ startDate }} - <span class="!font-bold">To:</span> {{ endDate }}</h2>
        </div>
        <div>
          <h2 class="font-bold opacity-75">{{ country }}</h2>
        </div>
        <Divider class="!mt-3" />
        <div class="flex justify-start items-center !mt-4" v-if="completed">
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
        <div v-else>
          <ProgressBar :value="(8.0/16.0)*100.0"> 8/16 completed tasks</ProgressBar>
        </div>
      </template>
    </Card>
  </RouterLink>
</template>
