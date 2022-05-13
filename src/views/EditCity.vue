<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Edit City</h2>
        <form @submit.prevent="updateCity">
          <div class="form-group">
            <input 
                type="text"
                v-model="cityInfo.name"
                class="form-control mb-3" 
                placeholder="Enter City">
          </div>
          <div class="form-group">
            <input 
                type="text"
                v-model="cityInfo.county"
                class="form-control mb-3" 
                placeholder="Enter County" >
          </div>
          <div class="form-group">
            <input 
                type="text"
                v-model="cityInfo.country"
                class="form-control mb-3" 
                placeholder="Enter Country">
          </div>

          <button type="submit" class="btn btn-primary">Edit City</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "@/firebase"
import { getDoc, doc, setDoc } from "@firebase/firestore"

export default {
  data(){
    return{
      selectedCity:{},
      cityId: null,
      docRef: null,
      cityInfo:{
        name: null,
        count: null,
        country: null 
      }
    }
  },

  methods:{
    async getCity(){
      let cityRef = doc(citiesColRef, this.cityId);
      this.docRef = cityRef;
      let city = await getDoc(this.docRef);
      let cityData = city.data();
      this.cityInfo.name = cityData.name;
      this.cityInfo.county = cityData.county;
      this.cityInfo.country = cityData.country;
    },
    async updateCity(){
      await setDoc(this.docRef, this.cityInfo)
      alert(`The city with ID of ${this.cityId} has been updated!`);
      this.$router.push("/");
    }
  },

  created(){
    let cityId = this.$route.params.cityId;
    this.cityId = cityId;
    this.getCity();
  }
}
</script>

<style>

</style>