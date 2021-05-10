<template>
    <div>
      <a :href="url" :style="styleNavItem" class="Defaultstyle">{{label}} </a>
    </div>
</template>

<script>
 
  export default {
    name: 'Navbaritem',
    props:{
      url:String,
      label:String,
     styleNavItem:Object
    }
  }
</script>

<style scoped>
.Defaultstyle{
  float: left;
  display: block;
  color:rgb(255, 255, 255);
  text-align: center;
  text-decoration: none;
  margin-left: 2%;
  font-size: 25px;
}
</style>