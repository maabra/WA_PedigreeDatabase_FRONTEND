<template>
    <table>
      <tr>
        <td rowspan="2">Parent 1</td>
        <td>Grandparent 1-1</td>
      </tr>
      <tr>
        <td>Grandparent 1-2</td>
      </tr>
      <tr>
        <td rowspan="2">Parent 2</td>
        <td>Grandparent 2-2</td>
      </tr>
      <tr>
        <td>Grandparent 2-2</td>
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
        parent1: 'Parent 1',
        parent2: 'Parent 2',
        grandparent1_1: 'Grandparent 1-1',
        grandparent1_2: 'Grandparent 1-2',
        grandparent1_3: 'Grandparent 1-3',
        grandparent2_1: 'Grandparent 2-1',
        grandparent2_2: 'Grandparent 2-2',
        grandparent2_3: 'Grandparent 2-3',
      };
    },
  };
  </script>