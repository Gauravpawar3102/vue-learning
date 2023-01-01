<script setup>
import { ref } from 'vue';

const showModal = ref(false);
const newNote = ref('');
const notes = ref([]);
const errorMessage = ref('');
function getRandomColor() {
  let color = 'hsl(' + Math.random() * 360 + ',100%,75%)';
  return color;
}

const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = 'note need to be 10 character or more ');
  }

  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor(),
  });
  showModal.value = false;
  newNote.value = '';
  errorMessage.value = '';
};
</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea
          v-model.trim="newNote"
          name="note"
          id="note"
          cols="30"
          rows="10"
        ></textarea>
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Notes</button>
        <button class="close" @click="showModal = false">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button class="notes-btn" @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div
          v-for="note in notes"
          :key="note.id"
          class="card"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">
            {{ note.text }}
          </p>
          <p class="date">{{ note.date.toLocaleDateString('en-IN') }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}
.notes-btn {
  border: none;
  background-color: black;
  color: white;
  height: 4rem;
  font-size: x-large;
  width: 4rem;
  border-radius: 2rem;
  cursor: pointer;
  padding: 1rem;
}
.card {
  width: 225px;
  height: 250px;
  border-radius: 1rem;
  padding: 1rem;
  background: skyblue;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main-text {
}
.date {
  font-size: 12px;
  font-weight: bold;
}

.cards-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  width: 580px;
  background-color: white;
  border-radius: 10px;
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.modal button {
  padding: 1rem 2rem;
  font-size: 20px;
  width: 100%;
  color: white;
  background-color: royalblue;
  border: none;
  font-weight: bold;
  cursor: pointer;
}
.modal .close {
  background-color: red;
}
.modal p {
  color: red;
}
</style>
