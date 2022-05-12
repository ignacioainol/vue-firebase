<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h2>Add City</h2>
        <form @submit.prevent="createCity">
          <div class="form-group">
            <input 
              type="text" 
              v-model="name"
              class="form-control mb-3"  
              placeholder="Name"
              >
          </div>
          <div class="form-group">
            <input 
              type="text" 
              v-model="county"
              class="form-control mb-3" 
              placeholder="Enter County" >
          </div>
          <div class="form-group">
            <input 
              type="text"
              v-model="country" 
              class="form-control mb-3" 
              placeholder="Enter Country">
          </div>

          <button type="submit" class="btn btn-primary">Create City</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import citiesColRef from "@/firebase";
import { addDoc } from 'firebase/firestore';

export default {
  data() {({
    name:null,
    county:null,
    country: null
  })},
  methods: {
    async createCity(){
      console.log("Creating Document")
      const addedDoc = await addDoc(citiesColRef, this.$data);
      console.log(addedDoc);
    }
  }
}
</script>

<style>

</style>