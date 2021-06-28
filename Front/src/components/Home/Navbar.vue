<template>
  <div class='container-nav'>
    <url class="navbar" :class='navscroll'>
         <li v-for="item in items" :key="item.label" class="default-item">
            <Navbaritem :url="item.url" :label="item.label" :styleNavItem="item.styleNavItem"/>
        </li>
    </url>
   </div>
</template>

<script>
    
    import Navbaritem from '@/components/Home/Navbaritem.vue'

    export default {
        name:'Navbar',
        props:{
          navscroll:Object
        },
      components: {
        Navbaritem
      },
      data: function () {
        return {
           
            items:[
              { 
                label:'Acueil',
                url:'url1',
                styleNavItem:{}
              },
              { 
                label:'Menu',
                url:'url12',
                styleNavItem:{}
              },
              { 
                label:'Competences',
                url:'url13',
                styleNavItem:{}
              },
              { 
                label:'Autres', 
                url:'url14',
                styleNavItem:{}
              },
              { 
                label:'Examples',
                url:'url15',
                styleNavItem:{}
              },
            ]
    }
   
  }
}
</script>
<style scoped>
.container-nav{
    display: block;
    width: 80.82%;
    overflow: hidden;
    background-color:  rgba(255, 255, 255, 0.2);
    z-index: 1;
   /* background-color: rgb(0, 0, 0);*/
    left: 15%;
    height: 9%;
    padding-top: 4px;
    padding-left: 30%;
    padding-right: 5%;
    position: fixed;
    border-radius: 10px;
    top: 0%;
    top: 10%;
}
.navbar{
   list-style:none;
}
.default-item{
  padding: 2px;
}
.default-item:hover{
  background-color: rgb(24, 24, 255);
  font-size: 12px;
}
</style>
