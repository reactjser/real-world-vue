<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EventService from '../services/EventService';
import { IEvent } from '../types/EventCard';

const props = defineProps<{ id: string }>();
const event = ref<IEvent | null>(null);

onMounted(async () => {
  try {
    const response = await EventService.getEvent(+props.id);
    event.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
