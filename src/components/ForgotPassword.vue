<template>
    <div class="vue-tempalte">
        <form>
            <h4 class="mt-2">Forgot Password</h4>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div> <div class="text-center  mt-4">
            <button type="submit" class="btn btn-dark btn-lg btn-block">Reset password</button></div>
            <div  class="mt-2 md-5" style="display: flex; justify-content: flex-end"> <span class="forgot-password text-right   ">
              <router-link to="/">Sign In?</router-link>
         </span>
        </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>