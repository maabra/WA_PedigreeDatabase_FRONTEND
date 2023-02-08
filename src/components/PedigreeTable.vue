<template>
  <div>
    <center>
  <table>
      <tr>
        <td rowspan="2">
          
      <p v-for="dog in dog" :key="dog._id">{{ dog.dogMother }}</p></td>
        <td><p v-for="dog in dog" :key="dog._id">{{ dog.dogGrandmaMother }}</p></td>
      </tr>
      <tr>
        <td><p v-for="dog in dog" :key="dog._id">{{ dog.dogGrandpaMother }}</p></td>
      </tr>
      <tr>
        <td rowspan="2"><p v-for="dog in dog" :key="dog._id">{{ dog.dogFather }}</p></td>
        <td><p v-for="dog in dog" :key="dog._id">{{ dog.dogGrandmaFather }}</p></td>
      </tr>
      <tr>
        <td><p v-for="dog in dog" :key="dog._id">{{ dog.dogGrandpaFather }}</p></td>
      </tr>
      <tr>
        <td></td>
      </tr>
    </table>
  </center>
</div>
  </template>
  
  <script>
  export default {
    name: 'PedigreeTable',
    data() {
      return {
        dog: [
  {
    dogMother: "(ime majke)",
    dogFather: "(ime oca)",
    dogGrandmaMother: "(ime majčine bake)",
    dogGrandpaMother: "(ime majčinog djeda)",
    dogGrandmaFather: "(ime očeve bake)",
    dogGrandpaFather: "(ime očevog djeda)",
  },
] 
      };
    },
  };
  </script>