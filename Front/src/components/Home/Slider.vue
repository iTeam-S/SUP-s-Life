<template>
  <div >
    <url class="default-ul" :class="className">
         <li v-for="item in cardProps" :key="item.text" class="default-li">
            <Card :src="item.src" :text="item.text"/>
        </li>
    </url>
   </div>
</template>

<script>
    import Card from '@/components/Home/Card.vue'
    export default {
      name: 'Slider',
      props:{
        cardProps:Array,
        className:String
      },
      components: {
        Card
      }
}

</script>
<style>
.default-ul {
  text-align: center;
  display:flex;
  flex:100%;
  flex-direction: row;
  color: #6200ff;
  padding:20%
}
.default-li{
  display: block;
  text-decoration: none;
  list-style: none;
}
</style>
