<template>
    <table>
      <tr>
        <td rowspan="2">{{ dog.dogMother }}</td>
        <td>{{ dog.dogGrandmaMother }}</td>
      </tr>
      <tr>
        <td>{{ dog.dogGrandpaMother }}</td>
      </tr>
      <tr>
        <td rowspan="2">{{ dog.dogFather }}</td>
        <td>{{ dog.dogGrandmaFather }}</td>
      </tr>
      <tr>
        <td>{{ dog.dogGrandpaFather }}</td>
      </tr>
      <tr>
        <td></td>
      </tr>
    </table>
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