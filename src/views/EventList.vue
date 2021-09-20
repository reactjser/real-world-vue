<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EventCard from '../components/EventCard.vue';
import EventService from '../services/EventService';
import type { IEvent } from '../types/EventCard';

const events = ref<IEvent[]>([]);

onMounted(async () => {
  try {
    const response = await EventService.getEvents();
    events.value = response.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
