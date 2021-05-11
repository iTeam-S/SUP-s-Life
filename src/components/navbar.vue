<template>
   <nav class="navbar navbar-expand-sm bg-dark text-white navbar-black" style="margin-bottom: 20px;">
        <!-- Brand -->
        <div class="row d-flex">
          <div class="col-md">
            <div class="mr-auto">
                <a class="navbar-brand" href="#">
                    <img src="../assets/images/cropped-logo-sesame-1.jpg" alt="logo" style="width:100px; margin: 10px;" >
                    <img src="../assets/images/iteams.jpg" alt="logo" style="width:40px;" >
                  </a>
            </div>
          </div>
          <div class="col-md">
            <div class="">
                <ul class="navbar-nav" style="margin-top: 10px; margin-left: 200%;">
                    <li class="nav-item">
                      <a class="nav-link" href="#">ACCUEIL</a>
                    </li>
                    <!-- Dropdown -->
                  <li class="nav-item">
                    <a class="nav-link" href="#">SERVICE</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">PROPOS</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">CONTACT</a>
                  </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
</template>

<script>
  export default {
     name: 'Navbar',

  data (){
    return {
      suffix : 'navbar'
    }
  },

  methods: {
    changePage(p){
      this.suffix = p
      console.log(this.suffix)
    }
  }
}
</script>
<style scoped>

</style>