<template>
  <div class="home">
    <h2>Cities</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Cras justo odio
              <span class="badge badge-primary badge-pill">
                <router-link class="btn btn-primary" :to="{path: `/cities/32432d`}">Edit</router-link>
                <a href="#" class="btn btn-danger ms-1">Delete</a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {

  },
}
</script>