<template>
    <div class="vue-template">
        <form name="form" @submit.prevent="handleRegister">
            <div v-if="!successful">
                <div class="form-group mt-3">
                    <label>{{ $t('body.register.fullName') }}</label>
                    <input type="text" v-model="user.username" name="username" v-validate="'required|min:3|max:20'"
                        class="form-control form-control-lg" />
                    <div v-if="submitted && errors.has('username')" class="alert-danger">{{ errors.first('username') }}
                    </div>
                </div>
                <div class="form-group">
                    <label>{{ $t('body.register.emailAdd') }}</label>
                    <input type="email" v-model="user.email" name="email" v-validate="'required|email|max:50'"
                        class="form-control form-control-lg" />
                    <div v-if="submitted && errors.has('email')" class="alert-danger">{{ errors.first('email') }}</div>

                </div>
                <div class="form-group">
                    <label>{{ $t('body.login.password') }}</label>
                    <input type="password" v-model="user.password" name="password" v-validate="'required|min:6|max:40'"
                        class="form-control form-control-lg" />
                    <div v-if="submitted && errors.has('password')" class="alert-danger">{{ errors.first('password') }}</div>
                </div>
                <div class="text-center  mt-4">
                    <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>
                </div>
                <p class="forgot-password text-right">
                    {{ $t('body.register.alrdy') }}
                    <router-link :to="{ name: 'login' }">sign in</router-link>
                </p>
            </div>
        </form>
        <div v-if="message" :class="successful ? ' success-message' : 'error-message'">{{ message }}
            <p v-if="successful" class="forgot-password text-right mt-4">
                    please login here..
                    <router-link :to="{ name: 'login' }">sign in</router-link>
                </p></div>
    </div>
</template>

<script>
import User from '../models/user';

export default {
    name: 'Register',
    data() {
        return {
            user: new User('', '', ''),
            submitted: false,
            successful: false,
            message: ''
        };
    },
    computed: {
        loggedIn() {
            return this.$store.state.auth.status.loggedIn;
        }
    },
    mounted() {
        if (this.loggedIn) {
            this.$router.push('/home');
        }
    },
    methods: {
        handleRegister() {
            this.message = '';
            this.submitted = true;
            this.$validator.validate().then(isValid => {
                if (isValid) {
                    this.$store.dispatch('auth/register', this.user).then(
                        data => {
                            this.message = data.message;
                            this.successful = true;
                        },
                        error => {
                            this.message =
                                (error.response && error.response.data.message) ||
                                error.message ||
                                error.toString();
                            this.successful = false;
                        }
                    );
                }
            });
        }
    }
};
</script>