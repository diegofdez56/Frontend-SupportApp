<script>
</script>

<template>
    <div class="container-fluid justify-content-center pt-5 pb-5 mt-4 pe-5 ps-5">
      <div class="row justify-content-center">
        <form @submit.prevent="submitForm" ref="formulario">
          <div class="form-group">
            <label for="nombre">Name:</label>
            <input type="text" id="nombre" v-model="nombre" required />
          </div>
          <div class="form-group">
            <label for="fecha">Date:</label>
            <input type="date" id="fecha" v-model="fecha" required />
          </div>
          <div class="form-group">
            <label for="asunto">Subject:</label>
            <input type="text" id="asunto" v-model="asunto" required />
          </div>
          <div class="form-group">
            <label for="descripcion">Description:</label>
            <textarea
              id="descripcion"
              v-model="descripcion"
              rows="4"
              required
            ></textarea>
          </div>
          <div class="form-buttons d-flex justify-content-center">
            <button type="button" class="btn btn-info me-2" @click="cancelar">
              Cancel
            </button>
            <button type="submit" class="btn btn-info">Save</button>
          </div>
        </form>
      </div>
    </div>
  </template>

<style scoped lang="scss">
form {
  width: 100%;
  max-width: 500px;
  background: #FFFFFF;
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