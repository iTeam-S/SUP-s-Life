<template>

 <div><h2>Liens de navigations</h2></div>


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