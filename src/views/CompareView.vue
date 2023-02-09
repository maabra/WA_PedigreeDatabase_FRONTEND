<template>
  <div>
    <div>
      <h2 class="text-center mb-5">Usporedba "inbreedinga" svih pasa</h2>
    </div>
    <div>
      Odabir mužjaka:
      <select v-model="m_dog" class="text-right m-2">
        <option v-for="dog in filteredDogsM" :key="dog._id" :value="dog">
          {{ dog.dogName }} {{ dog.dogKennel }}
        </option>
      </select>
      <p class="text-center">Pedigree od: {{ m_dog.dogName }} <PedigreeTable :dogs="m_dog" ></PedigreeTable></p>
    </div>
    <div>
      Odabir ženke:
      <select v-model="f_dog" class="text-right m-2">
        <option v-for="dog in filteredDogsF" :key="dog._id" :value="dog">
          {{ dog.dogName }} {{ dog.dogKennel }}
        </option>
      </select>
      <p class="text-center">Pedigree od: {{ f_dog.dogName }} <PedigreeTable :dogs="f_dog" ></PedigreeTable></p>

    </div>
    <div>
      <a class="btn btn-primary" @click="confirmSelection(f_dog, m_dog)"
        >Izvrši usporedbu</a
      >
    </div>
  </div>
</template>

<script>
import PedigreeTable from "../components/PedigreeTable.vue";

import { dogsAll } from "@/services";

export default {
  name: "CompareView",
  data() {
    return {
      dogs: [],
      dogs_f: [],
      dogs_m: [],
      m_dog: [],
      f_dog: [],
      sex_m: "M",
      sex_f: "Ž",
    };
  },
  components: {
    PedigreeTable,
  },
  created() {
    this.allDogs();
  },
  methods: {
    async allDogs() {
      try {
        let response = await dogsAll.allDogs();
        this.dogs = response.data;

        console.log(this.dogs);
      } catch (error) {
        console.log(error);
      }
    },

    setDogId(_id) {
      localStorage.setItem("dogId", _id);
    },

    confirmSelection(f_dog, m_dog) {
      console.log(this.f_dog, this.m_dog);
      let percentage = 0;
      if (f_dog.dogMother === m_dog.dogMother) {
        percentage += 25;
      }
      if (f_dog.dogFather === m_dog.dogFather) {
        percentage += 25;
      }
      if (f_dog.dogGrandmaMother === m_dog.dogGrandmaMother) {
        percentage += 12.5;
      }
      if (f_dog.dogGrandmaFather === m_dog.dogGrandmaMother) {
        percentage += 12.5;
      }
      if (f_dog.dogGrandmaFather === m_dog.dogGrandmaFather) {
        percentage += 12.5;
      }
      if (f_dog.dogGrandpaMother === m_dog.dogGrandpaMother) {
        percentage += 12.5;
      }
      if (f_dog.dogGrandpaFather === m_dog.dogGrandpaMother) {
        percentage += 12.5;
      }
      if (f_dog.dogGrandpaFather === m_dog.dogGrandpaFather) {
        percentage += 12.5;
      }
      console.log(percentage);
      let odgovor = "Postotak inbreedinga iznosi " + percentage + " %";

      console.log(odgovor);
      alert(odgovor);
    },
  },
  computed: {
    filteredDogsF() {
      let dogs_f = this.dogs.filter((dogs) => dogs.dogSex === this.sex_f);
      //console.log("ovo su zenke" + dogs_f);
      return dogs_f;
    },
    filteredDogsM() {
      let dogs_m = this.dogs.filter((dogs) => dogs.dogSex === this.sex_m);
      //console.log("ovo su muski" + dogs_m);
      return dogs_m;
    },
  },
};
</script>

<style lang="scss">
div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
}
select {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding: 3px;
}
</style>