<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
	<Navbar/>
    <Sign/>
	<Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbar.vue'
import Sign from '@/components/sign.vue'
import Footer from '@/components/footer.vue'



export default {
	name: 'Home',

	components: {
		Sign,
		Footer,
		Navbar
	},

	beforeMount(){
		console.log(this.$route)	
	}
}

</script>
