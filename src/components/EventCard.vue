<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { IEvent } from '../types/EventCard';

defineProps<{
  event: IEvent;
}>();
</script>

<template>
  <RouterLink
    :to="{
      name: 'EventDetails',
      params: {
        id: event.id,
      },
    }"
    class="event-link"
  >
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
