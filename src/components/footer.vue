<template>
  <footer >
     
   <div class="bg-dark text-white" style="margin-top: 15px; padding: 20px; text-align: center;">
    
        
    <div class="d-flex justify-content-between bg-darkmb-3">
        <div class="p-2" style="font-size: 20px;"><b>sign up for your newsletter</b></div>
        <div class="p-2">
            <div class="input-group mb-3">
                <input type="text" class="form-control bg-dark" placeholder="Email address" id="demo" name="email">
              </div>
        </div>
        <div class="p-2 ">
            <button type="button" style="text:white; background-color: red;">SUBSCRIBE</button>
        </div>
      </div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nostrum debitis cupiditate dolorem atque quasi fuga, quibusdam nulla facere incidunt corrupti laborum aut. Repellendus animi reiciendis nihil mollitia error aperiam.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, expedita! Rem cupiditate, error cumque, incidunt neque odit doloribus temporibus sunt provident dolores, nisi sapiente totam animi adipisci! Nemo, iure minima.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis assumenda accusantium aliquid officia, tenetur dolores enim maiores, eum reiciendis, consectetur quos expedita. Quibusdam sed beatae facilis inventore a laborum sapiente?

   </div>
</footer>
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