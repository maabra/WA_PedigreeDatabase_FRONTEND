<template>
  <div>
    <center>
      <img
        src="../assets/hometwotone.png"
        alt="Homepage Logo"
        width="30%"
        class="mb-2"
        @click="taktika"
      />

      <div class="row">
        <h2 class="mb-5">Pedigree database</h2>
        <pl>
          Fokus projekta bi bio vođenje liste rodovnica/pedigrea čistokrvne rase
          psa te usporedba pasa da nema "inbreedinga" (incesta u obiteljskom
          stablu).
        </pl>
        <pl>
          Vodi se lista pasa sa dobivenim CACIB-ima i CAC-ima kategoriziranih po
          broju postignuća.
        </pl>
        <pl>
          Na detaljima psa stoji ime psa, spol, datum štenjenja te sama
          rodovnica tj. obiteljsko stablo.
        </pl>
        <pl>
          Postoji obrazac koji potencijalni korisnici popunjuju da postave svog
          psa na stranicu.
        </pl>
      </div>
    </center>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      odgovor: "Dovoljno za 2?",
    };
    
  },
  
  methods: {
async taktika() {
      alert(this.odgovor);
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

pl {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
}
</style>