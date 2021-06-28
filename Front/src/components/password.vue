<template>
    <h3 class="form-title">Modification du mot de passe</h3>
     <form method="POST" class="register-form" id="register-form" action="/register">
        <div class="form-group">
        <label for="pass"><i class="zmdi zmdi-lock"></i></label>
        <input type="password" name="pass" minlength=8 id="pass" placeholder="Password" required/>
        </div>
        <div class="form-group">
            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
            <input type="password" name="re_pass" minlength=8 id="re_pass" placeholder="Repeat your password" required/>
        </div>
        <span class="form-group" id="notif">

        </span>
        <div class="form-group form-button">
            <input type="submit" name="signup" id="signup" class="form-submit" value="Modifier" required/>
        </div>
      <form>
</template>
<script>
export default {
  name: 'Password',

  data (){
    return {
      suffix : 'password'
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