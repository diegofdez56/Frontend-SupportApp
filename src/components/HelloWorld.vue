<script>
import { computed, onMounted } from 'vue';
import { useRequestStore } from '../stores/requestStore.js';

export default {
  name: 'RequestsList',
  setup() {
    const requestStore = useRequestStore();
    const requests = computed(() => requestStore.requests);
    onMounted(() => {
      requestStore.fetchAllRequests();
    });

    const formatDate = (dateString) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return { requests, formatDate };
  },
};
</script>

<template>
  <div class="container-fluid row" id="container">
    <div class="card mt-5 mb-5" style="width: 22rem;" id="card" v-for="request in requests" :key="request.id">
      <ul class="list-group list-group-flush">
        <label><strong>Name:</strong></label>
        <li class="list-group-item mb-3" id="section">{{ request.requestName }}</li>

        <label><strong>Date:</strong></label>
        <li class="list-group-item mb-3" id="section">{{ formatDate(request.requestDate) }}</li>

        <label><strong>Subject:</strong></label>
        <li class="list-group-item mb-3" id="section">{{ request.subject }}</li>

        <label><strong>Description:</strong></label>
        <li class="list-group-item mb-3" id="section">{{ request.description }}</li>
      </ul>
      <RouterLink to="/edit-request/:id">
        <button type="submit" class="btn btn-info" id="section">Edit</button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
#container {
  justify-content: center;
  gap: 10%;
  padding: 0;

  #card {
    height: 550px;
    background-color: white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;

    #section {
      width: 300px;
    }
  }
}
</style>
