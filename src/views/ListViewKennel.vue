<template>
  <div>
    <div>
      <h2 class="text-center mb-5">Lista registriranih uzgajivačnica</h2>
    </div>
    <div
      class="text-center mb-2"
      v-for="kennel in kennels"
      :key="JSON.stringify(kennel)"
    >
      <a class="btn btn-primary" @click="setkennelId(kennel._id)">{{
        kennel.nameKennel
      }}</a>
    </div>
  </div>
</template>

/* testno
<div v-if="kennels">
  {{ kennels }}Moze se vidjeti
</div>
*/

<script>
import { kennelsAll } from "@/services";

export default {
  name: "ListView",
  data() {
    return {
      sortby: "kennelName",
      sort: "asc",
      kennels: [],
      /*testlist: [
        { id: 1, name: "Test1" },
        { id: 2, name: "Test2" },
        { id: 3, name: "Test3" }
      ],*/
    };
  },

  created() {
    this.allKennels();
    //this.fetchkennels();
  },
  methods: {
    async allKennels() {
      try {
        let response = await kennelsAll.allKennels();
        this.kennels = response.data;

        console.log(this.kennels);
      } catch (error) {
        console.log(error);
      }
    },
    /*async fetchkennels() {
      const response = await service.get("/api/getAll");
      this.kennels = response.data;

      console.log(this.kennels);
    },*/

    setkennelId(_id) {
      localStorage.setItem("kennelId", _id);

      this.$router.push({ name: "kennel", params: { _id } });
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