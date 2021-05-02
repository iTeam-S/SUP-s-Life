<template>

    <div><h1>Footer</h1></div>

</template>
    

<script>
export default {
  name: 'Footer',

  data (){
    return {
      suffix : 'footer'
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