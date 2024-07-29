<script setup>
import { ref } from "vue";
import { useRequestStore } from "../stores/requestStore";

const newRequest = ref({
  requestName: "",
  subject: "",
  description: "",
  date: "",
});

const requestStore = useRequestStore();

const handleSubmit = async () => {
  try {
    console.log("Submitting request:", newRequest.value);
    let cleanRequest = { ...newRequest.value };
    console.log(cleanRequest);
    await requestStore.addRequest(cleanRequest);
    resetForm();
  } catch (error) {
    console.error("Error al enviar la solicitud:", error);
  }
};

const resetForm = () => {
  newRequest.value.requestName = "";
  newRequest.value.subject = "";
  newRequest.value.description = "";
  newRequest.value.date = "";
};

const cancelar = () => {
  alert("Formulario cancelado");
};
</script>

<template>
  <div class="container-fluid justify-content-center pt-5 pb-5 mt-4 pe-5 ps-5">
    <div class="row justify-content-center">
      <form @submit.prevent="handleSubmit" ref="formulario">
        <div class="form-group">
          <label for="requestName">Name:</label>
          <input type="text" id="requestName" v-model="newRequest.requestName" required />
        </div>
        <div class="form-group">
          <label for="date">Date:</label>
          <input type="date" id="date" v-model="newRequest.date" required />
        </div>
        <div class="form-group">
          <label for="subject">Subject:</label>
          <input type="text" id="subject" v-model="newRequest.subject" required />
        </div>
        <div class="form-group">
          <label for="description">Description:</label>
          <textarea id="description" v-model="newRequest.description" rows="4" required></textarea>
        </div>
        <div class="form-buttons d-flex justify-content-center">
          <RouterLink to="/home">
            <button type="button" class="btn btn-info me-2" @click="cancelar">
              Cancel
            </button>
          </RouterLink>
          <button type="reset" class="btn btn-info me-2" @click="resetForm">
            Reset
          </button>
          <RouterLink to="/home">
            <button type="submit" class="btn btn-info" @click="handleSubmit">
              Save
            </button>
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
form {
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.form-buttons {
  margin-top: 20px;
}
</style>
