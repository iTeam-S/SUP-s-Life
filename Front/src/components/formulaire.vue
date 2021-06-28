<template>
 <section class="signup">
            <div class="container">
                <div class="signup-content">
                    <div class="signup-form">
                        <h3 class="form-title">Modification du compte</h3>
                        <form method="POST" class="register-form" id="register-form" action="/register">
                            <div class="form-group">
                                <label for="name"><i class="zmdi zmdi-account material-icons-name" style="margin-right: 20px;"></i></label>
                                <input type="text" name="name" id="name" placeholder="Nom" required />
                            </div>
                            <div class="form-group">
                                <label for="fname"><i class="zmdi zmdi-account material-icons-name" style="margin-right: 20px;"></i></label>
                                <input type="text" name="fname" id="fname" placeholder="Prénom" required/>
                            </div>
                            <div class="form-group">
                                <label for="aname"><i class="zmdi zmdi-account material-icons-name" style="margin-right: 20px;"></i></label>
                                <input type="text" name="aname" id="aname" placeholder="Appelation" required/>
                            </div>

                            <div class="form-group">
                                <label for="email"><i class="zmdi zmdi-email" style="margin-right: 20px;"></i></label>
                                <input type="email" name="email" id="email" placeholder="Email" required/>
                            </div>

                            <span class="form-group" id="notif_email">

                            </span>

                            <div class="form-group">
                                <label for="promotion"><i class="zmdi zmdi-calendar" style="margin-right: 20px;"></i></label>
                                <input oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                type = "number"
                                maxlength = "4" name="promotion" placeholder="Promotion YYYY" required>
                            </div>

                            <div class="">
                                <div id="appe" class="input-group" >
                                    <div id="select" class="select" style="margin-left: 40%;">
                                        <select class="browser-default custom-select" id="categorie" name="foyer" required>
                                            <option value="">Foyer</option>
                                            
                                            <option value="ami'ral">Ami'Ral</option>
                                            <option value="fsociety">Fsociety</option>
                                        </select>
                                    </div>
                                </div>
                            </div><br>
                            <span class="form-group" id="notif">

                            </span>
                            <div class="form-group form-button">
                                <input type="submit" name="signup" id="signup" class="form-submit" value="Modifier" required/>
                            </div>
                        </form>
                    </div>
                    <div class="signup-image">
                        <figure><img src="../assets/images/signup-image.jpg" alt="sing up image"></figure>
                    </div>
                    <div>

                     </div>
                </div>
            </div>
        </section>
</template>
<script>
export default {
  name: 'Formulaire',

  data (){
    return {
      suffix : 'formulaire'
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