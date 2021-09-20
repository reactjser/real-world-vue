import axios from 'axios';
import type { IEvent } from '../types/EventCard';

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return apiClient.get<IEvent[]>('/events');
  },
  getEvent(id: number) {
    return apiClient.get<IEvent>(`/events/${id}`);
  },
};
