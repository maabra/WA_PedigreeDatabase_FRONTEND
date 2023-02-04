import axios from "axios";

let service = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 1000,
});

let dogs = {
  async addDog(dogName, dogSex, dogBirth, dogKennel,dogCacib,dogCac,dogMother,dogFather,dogGrandmaMother,dogGrandpaMother,dogGrandmaFather,dogGrandpaFather,dogPedNr) {
    let dog = {
      dogName,
      dogSex,
      dogBirth,
      dogKennel,
      dogCacib,
      dogCac,
      dogMother,
      dogFather,
      dogGrandmaMother,
      dogGrandpaMother,
      dogGrandmaFather,
      dogGrandpaFather,
      dogPedNr,
    };
    await service.post("/api/postDog", dog).then((response) => {
      console.log(response);
    });

    return true;
  },
};

let getAllDogs = {
async getAllDogs() {
  let dogs = await service.get("/getAll");
  //delete dogs.dogName;
  delete dogs.dogSex;
  delete dogs.dogBirth;
  //delete dogs.dogKennel;
  delete dogs.dogCacib;
  delete dogs.dogCac;
  delete dogs.dogMother;
  delete dogs.dogFather;
  delete dogs.dogGrandmaMother;
  delete dogs.dogGrandpaMother;
  delete dogs.dogGrandmaFather;
  delete dogs.dogGrandpaFather;
  //delete dogPedNr;

  return dogs.data;
}
};

export { service,dogs,getAllDogs };