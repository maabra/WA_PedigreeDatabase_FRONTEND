<template>
    <div>
      <h1>Details for Dog {{ dog.id }}</h1>
      <p>Name: {{ dog.name }}</p>
      <p>Breed: {{ dog.breed }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DogDetails',
    props: ['dog'],
  };
  </script>
  