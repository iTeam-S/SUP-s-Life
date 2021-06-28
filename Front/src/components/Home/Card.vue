<template>
    <div :class="className" class="default-style-card">
      <img :src="src">
      <p style="font-size: 16px;">{{text}}</p>
    </div>
</template>

<script>
 
  export default {
    name: 'Card',
    props:{
      src:String,
      text:String,
      className:Object
    }
  }
</script>

<style scoped>
.default-style-card{
  width: 20em;
  height: 15em;
  background-color: transparent;
  cursor: pointer;
  margin-right: 8em;
  box-shadow: 25px 20px 25px 10px rgba(0, 0, 0, 0.5);
}
.default-style-card img{
  width: 22em;
  height: 15em;
}
.default-style-card p{
  width: 22em;
  height: 4em;
  text-align: center;
  color: rgba(0, 0, 0);
  padding-top:20px ;
  font-weight: bold;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius:10px;
  background-color: rgb(233, 233, 103);
   box-shadow: 2px 10px 8px 0 rgba(0, 0, 0, 0.5);
  
}
</style>