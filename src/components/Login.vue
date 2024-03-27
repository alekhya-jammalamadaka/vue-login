<template>
    <div class="vue-template">
        <form name="form" @submit.prevent="handleLogin">
            <h4 class=" mt-3 ">{{ $t('body.login.login') }}</h4>
           
            <div class="form-group">
                <input type="email" class="form-control form-control-lg ps-4" placeholder="Email- Id" v-model="user.username" />
                <div v-if="errors.has('username')" class="alert alert-danger" role="alert">EmailId is required!</div>
            </div>

            <div id="input-container" class="form-group has-feedback ">
                <i class="display-eye bi bi-eye form-control-feedback" @mousedown="show = !show" @mouseup="show = !show"
                    @touchstart="show = !show" @touchend="show = !show" style="cursor: pointer;"></i>
                <input :type="show ? 'text' : 'password'" id="password" v-model="user.password"
                    class="  form-control form-control-lg ps-4" :placeholder="this.$t('body.login.password')">
                <div v-if="errors.has('password')" class="alert alert-danger" role="alert">Password is required!</div>
            </div>

            <div class="invalid">
                <div v-if="message" class="error-message" role="alert">{{ message }}</div>
            </div>

            <div class="text-center  mt-4">
                <button type="submit" :disabled="loading || user.password == '' || user.username == ''"
                    class="btn btn-dark btn-lg btn-block ">
                    <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                    <span>Sign In</span>
                </button>
            </div>

            <div class="mt-2 md´-5" style="display: flex; justify-content: space-between"> 
                <span
                    class="forgot-password text-left   ">
                    <router-link to="/signup">{{ $t('body.login.notRegst') }}</router-link>
                </span>
                <span class="forgot-password text-right   ">
                    <router-link to="/forgot-password">{{ $t('body.login.forgotPswd') }}</router-link>
                </span>
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

import User from '../models/user';

export default {
    name: 'Login',
    data() {
        return {
            user: new User('', ''),
            show: false,
            loading: false,
            message: ''
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    created() {
        if (this.loggedIn) {
            this.$router.push('/home');
        }
    },
    methods: {
        handleLogin() {
            this.loading = true;
            this.$validator.validateAll().then(isValid => {
               
                if (!isValid) {
                    this.loading = false;
                    return;
                }
                if (this.user.username && this.user.password) {
                    this.$store.dispatch('auth/login', this.user).then(
                        () => {
                            this.$router.push('/home');
                        },
                        error => {
                            this.loading = false;
                            this.message =
                                (error.response && error.response.data.message) ||
                                error.message ||
                                error.toString();
                        }
                    );
                }
                else {
                    this.loading = false;
                }
            });
        }
    }
};
</script>