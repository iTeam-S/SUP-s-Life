<template>
    <div>
        <section class="section-1 section"  id="example" v-on:scroll="handleScroll">
             <Navbar :navscroll="handleScroll.navscroll"/>
             <div class="label">
                <h1 style="color:white">Cabinet comptables bureau</h1>
                <h3>Maitrise. Engagement. Valeur</h3>
             </div>
        </section>
        <section class="section-2 section">
            <div class="label-2">
              <h1>Nos listes de clients</h1>
              <p>blablabalablablablabla</p>
            </div>
            <div class="slider">
              <div class="prev" v-on:click="prev('hello')"><h1>&#10094;</h1></div>
               <Slider :cardProps="cardProps"/>
               <div class="next"  v-on:click="next('hello')"><h1>&#10095;</h1></div>
            </div>
        </section>
         <section  class="section-3 section">
            <div class="label-3">
              <h1>Nos listes de clients</h1>
              <p>blablabalablablablabla</p>
            </div>
            <div class="slider-2">
              <div class="prev-2" v-on:click="prev('hello')"><h1>&#10094;</h1></div>
              <Slider :cardProps="cardProps"/>
               <div class="next-2" v-on:click="next('hello')"><h1>&#10095;</h1></div>
            </div>
            <div class="footer">
              <section class="footer-1">
                <div class="footer-11">
                    <h1 style=" font-size: 50px;">Nos services</h1>
                </div>
                <div class="footer-12">
                    <img src="../assets/images/bgImage.jpg" alt="">
                </div>
              </section>
              <section class="footer-2">
                <div v-for="(el,index) in footEl" :key="el.index" class="inner-footer">
                    <div class="inner-footer-1">
                        <h2 style=" font-size: 50px;">0{{index+1}}</h2>
                    </div>
                    <div class="inner-footer-2">
                        <h1 style="color: white;">{{el.title}}</h1>
                        <h4 style="color:rgb(214, 214, 214)">{{el.paragraphe}}</h4>
                    </div>
                </div>
              </section>
            </div>
        </section>
    </div>
</template>

<script>
    import Navbar from '@/components/Home/Navbar.vue'
    import Slider from '@/components/Home/Slider.vue'
    export default {
      name: 'Home',
      state: {
        message: 'Hello!'
      },
      components: {
        Navbar,
        Slider
      },
      data: function () {
        return {
            cardProps:[
              { 
                text:'Acueilv',
                src:require('../assets/images/bgImage.jpg'),
                className:{}
              },
              { 
                text:'Acueil1',
                src:require('../assets/images/bgImage.jpg'),
                className:{}
              }
              ,
              { 
                text:'Acueil2',
                src:require('../assets/images/bgImage.jpg'),
                className:{}
              }
            ],
            footEl:[
              { 
                title:'title1',
                paragraphe:'example1',
              },
              { 
                title:'title2',
                paragraphe:'example2',
              }
              ,
              { 
                title:'title3',
                paragraphe:'example3',
              }
          ],
          navscroll:{

          }
    }
  
   
  },
  methods: {
    prev: function (message) {
        alert(message)
    },
    next: function(message){
        alert(message)
    },
    handleScroll:function(event){
        if(event.scrollY > 0){
          alert('ok')
          this.navscroll = {
            transform:'translateY(0)',
            backgroundClor:'black'
          }
        }
        else{
          alert('ok')
        }
    },
    created:function() {
      document.body.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      document.body.addEventListener('scroll', this.handleScroll);
    },
  }
}
</script>


<style scoped>
  .section{
    margin:0;
    display:block;
    background-color: transparent;
    background-repeat: no-repeat;
    background-attachment: scroll;
    height: 100%;
    background-size: 100%;
   
  }
  .section-1{
    background-image:url('../assets/images/bgImage.jpg');
    padding: 28%;
  }
  .label{
    display: block;
    position: absolute;
    top:50%;
    left: 15%;
  }
  .label-2{
    display: block;
    position: absolute;
    text-align: center;
    top:130%;
    left: 40%;
  }.label-3{
    display: block;
    position: absolute;
    top:200%;
    left: 40%;
  }
  .section-2{
    background-color: rgb(255, 255, 255);
    padding: 24%;
    
  }
  .section-3{
    background-color: rgb(255, 255, 255);
  }
  .slider{
    display: flex;
    flex-direction: row;
    position: absolute;
    border-color: balck;
    border-width: 5px;
    top:113%;
    left: -9%;
  }
  .prev,.prev-2{
    height: 4vw;
    width: 4vw;
    border-radius: 50%;
    background-color: rgb(26, 26, 26);
    position: absolute;
    text-align: center;
    padding:5px ;
    color: white;
    top:50%;
    left: 12%;
    cursor: pointer;
  }
  .next,.next-2{
    height: 4vw;
    width: 4vw;
    border-radius: 50%;
    position: absolute;
    padding:5px ;
    color: white;
    text-align: center;
    background-color: rgb(26, 26, 26);
    top:50%;
    right:  -21%;
    cursor: pointer;
  }
  .section-3{
    background-color: rgb(255, 255, 255);
    padding: 26%;
  }
  .slider-2{
    display: flex;
    flex-direction: row;
    position: absolute;
    top:182%;
    left: -9%;
  }
  .footer{
    display: flex;
    position: absolute;
    top: 263%;
    left: 8.6%;
    width: 82.5%;
    flex-direction: row;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.3);
  
  }
  .inner-footer{
    display: flex;
    flex-direction: row;
    border-bottom-width: 78vw;
  }
  .footer-1,.footer-2{
    display: flex;
    flex-direction:column;
    flex: 40%;
  }
  .footer-2{
    margin-top: 5%;
    margin-left: 10%;
  }
  .footer-11{
    margin-top: 10%;
    margin-left: 10%;
    color: white;
    display: flex;
  }
  .footer-12 img{
    margin-left: 10%;
    height: 80%;
    border-radius: 10px;
    width: 90%;
  }
  .footer-12{
    margin-top: 5%;
    padding:0;
  }
  .inner-footer-2{
    margin-bottom: 25px;
    border: black;
    border-width: 20px;
    margin-left: 70px;
  }
  .inner-footer-1{
    margin-top: 15px;
  }
  .slide{
    height:0%;
    width: 100%;
    background-color: red;
    
  }

































  #demo {
  overflow: hidden;
}

.slide-leave-active,
.slide-enter-active {
  transition: 1s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(-100%, 0);
}

.img-slider{
  overflow: hidden;
  position: relative;
  height: 200px;
  width: 400px;
}

.img-slider img {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right:0;
}
</style>

