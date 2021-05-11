<template>

        <!-- Singup  Form -->
    <section v-if="suffix == 'signup' " class="signup">
    <SimpleModal v-bind:msg = "message" v-if ="showModal" @close = "closeModal()"/>
        <div class="container">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">S'inscrire</h2>
                    <form method="" class="register-form" id="register-form" action="">
                        <div class="form-group">
                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="name" id="name" placeholder="Nom" required v-model="s_nom"/>
                        </div>
                        <div class="form-group">
                            <label for="fname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="fname" id="fname" placeholder="Prénom" required v-model="s_prenom"/>
                        </div>
                        <div class="form-group">
                            <label for="aname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                            <input type="text" name="aname" id="aname" placeholder="Appelation" required v-model="s_appelation"/>
                        </div>

                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email" placeholder="Email" required v-model="s_email_inscr"/>
                        </div>

                        <span class="form-group" id="notif_email">

                        </span>

                        <div class="form-group">
                            <label for="promotion"><i class="zmdi zmdi-calendar"></i></label>
                            <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                            type = "number"
                            maxlength = "4" name="promotion" placeholder="Promotion YYYY" required v-model="promotion">
                        </div>

                        <div class="">
                            <div id="appe" class="input-group">
                                <div id="select" class="select">
                                    <select class="browser-default custom-select" id="categorie" name="foyer" required v-model="foyer">
                                        <option value="">Foyer</option>
                                        
                                        <option value="ami'ral">Ami'Ral</option>
                                        <option value="fsociety">Fsociety</option>
                                    </select>
                                </div>
                            </div>
                        </div><br>

                        <div class="">
                            <div id="appe" class="input-group">
                                <div id="select" class="select">
                                    <select class="browser-default custom-select" id="categorie" name="referant" required v-model="referent">
                                        <option value="">Référant</option>
                                        
                                        <option value="Andry">Andry</option>
                                        <option value="Eddy">Eddy</option>
                                        </select>
                                    </div>
                            </div>
                        </div><br>

                        <div class="form-group">
                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" name="pass" minlength=8 id="pass" placeholder="Password" required v-model="s_password_inscr"/>
                        </div>
                        <div class="form-group">
                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                            <input type="password" name="re_pass" minlength=8 id="re_pass" placeholder="Repeat your password" required v-model="s_repeatPassword"/>
                        </div>
                        <span class="form-group" id="notif">

                        </span>
                        <div class="form-group form-button">
                            <input @click="inscription()" type="button" name="signup" id="signup" class="form-submit" value="Enregistrer" required/>
                        </div>
                        
                    </form>
                </div>
                <div class="signup-image">
                    <figure><img src="../assets/images/signup-image.jpg" alt="sing up image"></figure>
                    <button @click="changePage('referant')" type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Référant s'inscrire / se connecter</button>
                </div>
                <div>

                 </div>
            </div>
        </div>
    </section>

    <section v-else-if = "suffix == 'referant'">
        <div class="container-fluid container px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
                <div class="card card0 border-0">
                    <div class="row d-flex">
                        <div class="col-lg-6">
                            <div class="card1 pb-5">
                                <!--<div class="row"> <img src="https://i.imgur.com/CXQmsmF.png" class="logo"> </div>-->
                                <div class="row px-3 justify-content-center mt-4 mb-5 border-line">
                                    <img src="https://i.imgur.com/uNGdWHi.png" class="image">
                                <div>
                                <h2 class="form-title">Se connecter</h2>
                                <form method="POST" class="register-form" id="login-form" action="/login/re">
                                    <div class="form-group">
                                        <label for="email"><i class="zmdi zmdi-email"></i></label>
                                        <input type="email" name="email" id="r_email_log" placeholder="Email" v-model="r_email_conx"/>
                                    </div>
                                    <span class="form-group" id="r_notif_email_log">

                                    </span>
                                    <div class="form-group">
                                        <label for="r_your_pass"><i class="zmdi zmdi-lock"></i></label>
                                        <input type="password" minlength=7 name="pass" id="r_your_pass" placeholder="Password" disabled v-model="r_password_conx"/>
                                    </div>
                                    <span class="form-group" id="r_notif_pass_log">

                                    </span>
                                    <input type="hidden" name="e" value="ferant">
                                    <div class="form-group form-button">
                                        <input type="submit" disabled name="signin" id="r_signin" class="form-submit" value="Valider"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="card2 card border-0 px-4 py-5">

                                <div>
                                    <h2 class="form-title">S'inscrire</h2>
                                    <form method="" class="register-form" id="register-form" action="">
                                        <div class="form-group">
                                            <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                            <input type="text" name="name" id="name" placeholder="Nom" required v-model="r_nom"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="fname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                            <input type="text" name="fname" id="fname" placeholder="Prénom" required v-model="r_prenom"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="aname"><i class="zmdi zmdi-account material-icons-name"></i></label>
                                            <input type="text" name="aname" id="aname" placeholder="Appelation" required v-model="r_appelation"/>
                                        </div>

                                        <div class="form-group">
                                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                                            <input type="email" name="email" id="r_email" placeholder="Email" required v-model="r_email_inscr"/>
                                        </div>

                                        <span class="form-group" id="r_notif_email">

                                        </span>

                                        <div class="form-group">
                                            <label for="phone"><i class="zmdi zmdi-phone"></i></label>
                                            <input type="text" name="phone" id="phone" placeholder="Téléphone" required v-model="telephone"/>
                                        </div>

                                        <div class="form-group">
                                            <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                                            <input type="password" name="pass" minlength=8 id="r_pass" placeholder="Password" required v-model="r_password_inscr"/>
                                        </div>
                                        <div class="form-group">
                                            <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                                            <input type="password" name="re_pass" minlength=8 id="r_re_pass" placeholder="Repeat your password" required v-model="r_repeatPassword"/>
                                        </div>
                                        <span class="form-group" id="r_notif">

                                        </span>
                                        <div class="form-group form-button">
                                            <input type="submit" name="signup" id="r_signup" class="form-submit" value="Enregistrer" required/>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--
                    <div class="bg-blue py-4">
                        <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                            <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                        </div>
                    </div>
                    -->
                </div>
            </div>
    </section>

    <!-- Sing in  Form -->
    <section v-else class="sign-in">
        <div class="container">
            <div class="signin-content">
                <div class="signin-image">
                    <figure><img src="../assets/images/signin-image.jpg" alt="sing up image"></figure>
                    <a href="#" @click="changePage('signup')" class="signup-image-link">Créer un compte</a>
                </div>

                <div class="signin-form">
                    <h2 class="form-title">Se connecter</h2>
                    <form method="POST" class="register-form" id="login-form" action="/login/etu">
                        <div class="form-group">
                            <label for="email"><i class="zmdi zmdi-email"></i></label>
                            <input type="email" name="email" id="email_log" placeholder="Email" v-model="s_email_conx"/>
                        </div>
                        <span class="form-group" id="notif_email_log">

                        </span>
                        <div class="form-group">
                            <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                            <input type="password" minlength=7 name="pass" id="your_pass" placeholder="Password" disabled v-model="s_password_conx"/>
                        </div>
                        <span class="form-group" id="notif_pass_log">

                        </span>
                        <input type="hidden" name="e" value="diant">
                        <div class="form-group form-button">
                            <input type="button" disabled name="signin" id="signin" class="form-submit" value="Valider"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
   

        
</template>
<script>
import SimpleModal from '@/components/SimpleModal.vue'
export default {
  name: 'Sign',
  components : { SimpleModal },

  data (){
    return {
          suffix : 'signin',
          s_email_conx : "",
          s_password_conx : "",
          s_nom : "",
          s_prenom : "", 
          s_appelation : "",
          s_email_inscr : "", 
          promotion : "",
          foyer : "",
          referent : "",
          s_password_inscr : "",
          s_repeatPassword : "",
          r_email_conx : "",
          r_password_conx : "",
          r_nom : "",
          r_prenom : "",
          r_appelation : "",
          r_email_inscr : "",
          telephone : "",
          r_password_inscr :"",
          r_repeatPassword : "", 
          message : "", 
          showModal : false
    }
  },

  methods: {
    changePage(p){
      this.suffix = p
      console.log(this.suffix)
    }, 
    closeModal() {
       this.showModal = false;    
    },
    inscription(){
    this.axios.post('http://127.0.0.1:8000/api/v1/register', {
      name : this.s_nom,
      fname : this.s_prenom,
      aname : this.s_appelation,
      email : this.s_email_inscr,
      promotion : this.promotion,
      foyer : this.foyer,
      referent : this.referent,
      pass : this.s_password_inscr,
      re_pass : this.s_repeatPassword
    })
    .then(function(){
      this.showModal = true;
      this.message = "Enregistré avec Succès;"
    })
    .catch(function(err){
        this.showModal = true;
        this.message = "Error";
        console.log(err);
    });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.rouge{
    color: red;
}


.image {
    width: 360px;
    height: 280px
}


.or {
    width: 10%;
    font-weight: bold
}

:-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}

::-ms-input-placeholder {
    color: #BDBDBD;
    font-weight: 300
}


button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0
}

a {
    color: inherit;
    cursor: pointer
}

.btn-blue {
    background-color: #1A237E;
    width: 150px;
    color: #fff;
    border-radius: 2px
}

.btn-blue:hover {
    background-color: #000;
    cursor: pointer
}

.bg-blue {
    color: #fff;
    background-color: #1A237E
}

@media screen and (max-width: 991px) {
    .logo {
        margin-left: 0px
    }

    .image {
        width: 300px;
        height: 220px
    }

    .border-line {
        border-right: none
    }

    .card2 {
        border-top: 1px solid #EEEEEE !important;
        margin: 0px 15px
    }
}



/* STYLE CSS  */


/* @extend display-flex; */
display-flex, .display-flex, .display-flex-center, .signup-content, .signin-content, .social-login, .socials {
  display: flex;
  display: -webkit-flex; }

/* @extend list-type-ulli; */
list-type-ulli, .socials {
  list-style-type: none;
  margin: 0;
  padding: 0; }

/* poppins-300 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url("../assets/fonts/poppins/poppins-v5-latin-300.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Light"), local("Poppins-Light"), url("../assets/fonts/poppins/poppins-v5-latin-300.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-300.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-300.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-300.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-300.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-300italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 300;
  src: url("../assets/fonts/poppins/poppins-v5-latin-300italic.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Light Italic"), local("Poppins-LightItalic"), url("../assets/fonts/poppins/poppins-v5-latin-300italic.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-300italic.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-300italic.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-300italic.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-300italic.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url("../assets/fonts/poppins/poppins-v5-latin-regular.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Regular"), local("Poppins-Regular"), url("../assets/fonts/poppins/poppins-v5-latin-regular.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-regular.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-regular.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-regular.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-regular.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 400;
  src: url("../assets/fonts/poppins/poppins-v5-latin-italic.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Italic"), local("Poppins-Italic"), url("../assets/fonts/poppins/poppins-v5-latin-italic.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-italic.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-italic.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-italic.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-italic.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: url("../assets/fonts/poppins/poppins-v5-latin-500.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Medium"), local("Poppins-Medium"), url("../assets/fonts/poppins/poppins-v5-latin-500.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-500.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-500.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-500.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-500.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-500italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 500;
  src: url("../assets/fonts/poppins/poppins-v5-latin-500italic.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Medium Italic"), local("Poppins-MediumItalic"), url("../assets/fonts/poppins/poppins-v5-latin-500italic.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-500italic.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-500italic.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-500italic.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-500italic.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url("../assets/fonts/poppins/poppins-v5-latin-600.eot");
  /* IE9 Compat Modes */
  src: local("Poppins SemiBold"), local("Poppins-SemiBold"), url("../assets/fonts/poppins/poppins-v5-latin-600.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-600.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-600.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-600.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-600.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: url("../assets/fonts/poppins/poppins-v5-latin-700.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Bold"), local("Poppins-Bold"), url("../assets/fonts/poppins/poppins-v5-latin-700.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-700.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-700.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-700.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-700.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-700italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 700;
  src: url("../assets/fonts/poppins/poppins-v5-latin-700italic.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Bold Italic"), local("Poppins-BoldItalic"), url("../assets/fonts/poppins/poppins-v5-latin-700italic.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-700italic.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-700italic.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-700italic.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-700italic.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-800 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 800;
  src: url("../assets/fonts/poppins/poppins-v5-latin-800.eot");
  /* IE9 Compat Modes */
  src: local("Poppins ExtraBold"), local("Poppins-ExtraBold"), url("../assets/fonts/poppins/poppins-v5-latin-800.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-800.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-800.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-800.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-800.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-800italic - latin */
@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: 800;
  src: url("../assets/fonts/poppins/poppins-v5-latin-800italic.eot");
  /* IE9 Compat Modes */
  src: local("Poppins ExtraBold Italic"), local("Poppins-ExtraBoldItalic"), url("../assets/fonts/poppins/poppins-v5-latin-800italic.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-800italic.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-800italic.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-800italic.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-800italic.svg#Poppins") format("svg");
  /* Legacy iOS */ }
/* poppins-900 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 900;
  src: url("../assets/fonts/poppins/poppins-v5-latin-900.eot");
  /* IE9 Compat Modes */
  src: local("Poppins Black"), local("Poppins-Black"), url("../assets/fonts/poppins/poppins-v5-latin-900.eot?#iefix") format("embedded-opentype"), url("../assets/fonts/poppins/poppins-v5-latin-900.woff2") format("woff2"), url("../assets/fonts/poppins/poppins-v5-latin-900.woff") format("woff"), url("../assets/fonts/poppins/poppins-v5-latin-900.ttf") format("truetype"), url("../assets/fonts/poppins/poppins-v5-latin-900.svg#Poppins") format("svg");
  /* Legacy iOS */ }
a:focus, a:active {
  text-decoration: none;
  outline: none;
  transition: all 300ms ease 0s;
  -moz-transition: all 300ms ease 0s;
  -webkit-transition: all 300ms ease 0s;
  -o-transition: all 300ms ease 0s;
  -ms-transition: all 300ms ease 0s; }

input, select, textarea {
  outline: none;
  appearance: unset !important;
  -moz-appearance: unset !important;
  -webkit-appearance: unset !important;
  -o-appearance: unset !important;
  -ms-appearance: unset !important; }

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  appearance: none !important;
  -moz-appearance: none !important;
  -webkit-appearance: none !important;
  -o-appearance: none !important;
  -ms-appearance: none !important;
  margin: 0; }

input:focus, select:focus, textarea:focus {
  outline: none;
  box-shadow: none !important;
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  -o-box-shadow: none !important;
  -ms-box-shadow: none !important; }

input[type=checkbox] {
  appearance: checkbox !important;
  -moz-appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
  -o-appearance: checkbox !important;
  -ms-appearance: checkbox !important; }

input[type=radio] {
  appearance: radio !important;
  -moz-appearance: radio !important;
  -webkit-appearance: radio !important;
  -o-appearance: radio !important;
  -ms-appearance: radio !important; }

img {
  max-width: 100%;
  height: auto; }

figure {
  margin: 0; }

p {
  margin-bottom: 0px;
  font-size: 15px;
  color: #777; }

h2 {
  line-height: 1.66;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #222;
  font-family: Poppins;
  font-size: 36px; }

.main {
  background: #f8f8f8;
  padding: 150px 0; }

.clear {
  clear: both; }

body {
  font-size: 13px;
  line-height: 1.8;
  color: #222;
  background: #f8f8f8;
  font-weight: 400;
  font-family: Poppins; }

.container {
  width: 900px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  -moz-border-radius: 20px;
  -webkit-border-radius: 20px;
  -o-border-radius: 20px;
  -ms-border-radius: 20px; }

.display-flex {
  justify-content: space-between;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -o-justify-content: space-between;
  -ms-justify-content: space-between;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center; }

.display-flex-center {
  justify-content: center;
  -moz-justify-content: center;
  -webkit-justify-content: center;
  -o-justify-content: center;
  -ms-justify-content: center;
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center; }

.position-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%); }

.signup {
  margin-bottom: 150px; }


.signup-form, .signup-image, .signin-form, .signin-image {
  width: 50%;
  overflow: hidden; }

  .signup-image {
    margin: 0 55px; }

.form-title {
  margin-bottom: 33px; }

.signup-image {
  margin-top: 45px; }

figure {
  margin-bottom: 50px;
  text-align: center; }

.form-submit {
  display: inline-block;
  background: #6dabe4;
  color: #fff;
  border-bottom: none;
  width: auto;
  padding: 15px 39px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  -o-border-radius: 5px;
  -ms-border-radius: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
  cursor: pointer; }
  .form-submit:hover {
    background: #4292dc; }

#signin {
  margin-top: 16px; }

.signup-image-link {
  font-size: 14px;
  color: #222;
  display: block;
  text-align: center; }

.term-service {
  font-size: 13px;
  color: #222; }

.signup-form {
  margin-left: 75px;
  margin-right: 75px;
  padding-left: 34px; }

.register-form {
  width: 100%; }

.form-group {
  position: relative;
  margin-bottom: 25px;
  overflow: hidden; }
  .form-group:last-child {
    margin-bottom: 0px; }

input {
  width: 100%;
  display: block;
  border: none;
  border-bottom: 1px solid #999;
  padding: 6px 30px;
  font-family: Poppins;
  box-sizing: border-box; }
  input::-webkit-input-placeholder {
    color: #999; }
  input::-moz-placeholder {
    color: #999; }
  input:-ms-input-placeholder {
    color: #999; }
  input:-moz-placeholder {
    color: #999; }
  input:focus {
    border-bottom: 1px solid #222; }
    input:focus::-webkit-input-placeholder {
      color: #222; }
    input:focus::-moz-placeholder {
      color: #222; }
    input:focus:-ms-input-placeholder {
      color: #222; }
    input:focus:-moz-placeholder {
      color: #222; }

input[type=checkbox]:not(old) {
  width: 2em;
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: none; }

input[type=checkbox]:not(old) + label {
  display: inline-block;
  line-height: 1.5em;
  margin-top: 6px; }

input[type=checkbox]:not(old) + label > span {
  display: inline-block;
  width: 13px;
  height: 13px;
  margin-right: 15px;
  margin-bottom: 3px;
  border: 1px solid #999;
  border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  -o-border-radius: 2px;
  -ms-border-radius: 2px;
  background: white;
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white);
  vertical-align: bottom; }

input[type=checkbox]:not(old):checked + label > span {
  background-image: -moz-linear-gradient(white, white);
  background-image: -ms-linear-gradient(white, white);
  background-image: -o-linear-gradient(white, white);
  background-image: -webkit-linear-gradient(white, white);
  background-image: linear-gradient(white, white); }

input[type=checkbox]:not(old):checked + label > span:before {
  content: '\f26b';
  display: block;
  color: #222;
  font-size: 11px;
  line-height: 1.2;
  text-align: center;
  font-family: 'Material-Design-Iconic-Font';
  font-weight: bold; }

.agree-term {
  display: inline-block;
  width: auto; }

label {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  -moz-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  -o-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  color: #222; }

.label-has-error {
  top: 22%; }

label.error {
  position: relative;
  /*background: url("../assets/images/unchecked.gif") no-repeat;*/
  background-position-y: 3px;
  padding-left: 20px;
  display: block;
  margin-top: 20px; }

label.valid {
  display: block;
  position: absolute;
  right: 0;
  left: auto;
  margin-top: -6px;
  width: 20px;
  height: 20px;
  background: transparent; }
  label.valid:after {
    font-family: 'Material-Design-Iconic-Font';
    content: '\f269';
    width: 100%;
    height: 100%;
    position: absolute;
    /* right: 0; */
    font-size: 16px;
    color: green; }

.label-agree-term {
  position: relative;
  top: 0%;
  transform: translateY(0);
  -moz-transform: translateY(0);
  -webkit-transform: translateY(0);
  -o-transform: translateY(0);
  -ms-transform: translateY(0); }

.material-icons-name {
  font-size: 18px; }

.signin-content {
  padding-bottom: 87px; }

.social-login {
  align-items: center;
  -moz-align-items: center;
  -webkit-align-items: center;
  -o-align-items: center;
  -ms-align-items: center;
  margin-top: 80px; }

.social-label {
  display: inline-block;
  margin-right: 15px; }

.socials li {
  padding: 5px; }
  .socials li:last-child {
    margin-right: 0px; }
  .socials li a {
    text-decoration: none; }
    .socials li a i {
      width: 30px;
      height: 30px;
      color: #fff;
      font-size: 14px;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      -o-border-radius: 5px;
      -ms-border-radius: 5px;
      transform: translateZ(0);
      -moz-transform: translateZ(0);
      -webkit-transform: translateZ(0);
      -o-transform: translateZ(0);
      -ms-transform: translateZ(0);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-property: transform;
      transition-property: transform;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out; }
  .socials li:hover a i {
    -webkit-transform: scale(1.3) translateZ(0);
    transform: scale(1.3) translateZ(0); }

.zmdi-facebook {
  background: #3b5998; }

.zmdi-twitter {
  background: #1da0f2; }

.zmdi-google {
  background: #e72734; }

.signin-form {
  margin-right: 90px;
  margin-left: 80px; }

.signin-image {
  margin-left: 110px;
  margin-right: 20px;
  margin-top: 10px; }

@media screen and (max-width: 1200px) {
  .container {
    width: calc( 100% - 30px);
    max-width: 100%; } }
@media screen and (min-width: 1024px) {
  .container {
    max-width: 1200px; } }
@media screen and (max-width: 768px) {
  .signup-content, .signin-content {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center; }

  .signup-form {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    /* box-sizing: border-box; */
    padding: 0 30px; }

  .signin-image {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 50px;
    order: 2;
    -moz-order: 2;
    -webkit-order: 2;
    -o-order: 2;
    -ms-order: 2; }

  .signup-form, .signup-image, .signin-form, .signin-image {
    width: auto; }

  .social-login {
    justify-content: center;
    -moz-justify-content: center;
    -webkit-justify-content: center;
    -o-justify-content: center;
    -ms-justify-content: center; }

  .form-button {
    text-align: center; }

  .signin-form {
    order: 1;
    -moz-order: 1;
    -webkit-order: 1;
    -o-order: 1;
    -ms-order: 1;
    margin-right: 0px;
    margin-left: 0px;
    padding: 0 30px; }

  .form-title {
    text-align: center; } }
@media screen and (max-width: 400px) {
  .social-login {
    flex-direction: column;
    -moz-flex-direction: column;
    -webkit-flex-direction: column;
    -o-flex-direction: column;
    -ms-flex-direction: column; }

  .social-label {
    margin-right: 0px;
    margin-bottom: 10px; } }

/*# sourceMappingURL=style.css.map */

</style>
