<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Sign/>
  </div>
</template>

<script>
// @ is an alias to /src
import Sign from '@/components/sign.vue'

export default {
	name: 'Home',

	components: {
		Sign
	},

	beforeMount(){
		console.log(this.$route)	
	}
}

</script>
