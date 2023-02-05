<template>
  <div>
    <div>
      <h2 class="text-center mb-5">
        Lista svih pasa kategoriziranih po količini osvojenih nagrada
      </h2>
    </div>
    <ul>
      <li v-for="dog in dogs" :key="dog._id">
        <router-link :to="`/dog/${dog._id}`"
          >{{ dog.dogName }}
          {{ dog.dogKennel }}
          ({{ dog.dogPedNr }})</router-link
        >
      </li>
    </ul>

    <router-view :dogs="dogs"></router-view>
  </div>
</template>

<script>
import { service } from "@/services";

export default {
  name: "ListView",
  props: ["dog"],
  data() {
    return {
      dogs: [],
    };
  },

  created() {
    this.fetchDogs();
  },
  methods: {
    async fetchDogs() {
      const response = await service.get("/api/getAll");
      this.dogs = response.data;
    },
  },
};
</script>