<template>
    <div class="vue-template">
        <form name="form" >
            <h4 class=" mt-3 ">Welcome</h4>
           
            <div class="text-center  mt-4">
                <button type="submit"   @click.prevent="handleLogout" class="btn btn-dark btn-lg btn-block ">
                    <span>logout</span></button>
            </div>
          
           
            <div class="social-icons mt-5 md-5">
              <ul>
                    <li tooltip="google"><a href="https://www.google.com"  target="_blank"><i class="bi bi-google"></i></a></li>
                    <li><a href="#"><i href="https://www.facebook.com"  target="_blank" class="bi bi-facebook"></i></a></li>
                    <li><a href="#"><i href="https://www.twitter.com"  target="_blank" class="bi bi-twitter-x"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
  </template>
  
  <script>
 
  
  export default {
    name: 'Home',
    data() {
      return {
        content: ''
      };
    },

    methods: {
      // Log out with Userfront.logout()
      handleLogout() {
        this.$store.dispatch('auth/logout');
      this.$router.push('/');
      },
    },
    computed: {
      // User is logged out if they don't have an access token
      isLoggedOut() {
        return !Userfront.tokens.accessToken;
      },
    },
  };
  </script>