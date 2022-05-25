<template>
    <div class="col-md-12">
        <div class="container">
        <h2>Login</h2>
        <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="handleSubmit">
                            <div class="form-group">
                                <label for="Email">Email</label>
                                <input type="text" v-model="Email" name="Email" class="form-control" :class="{ 'is-invalid': submitted && !Email }" />
                                <div v-show="submitted && !Email" class="invalid-feedback">Email is required</div>
                            </div>
                            <div class="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
                            </div>
                            <div class="form-group">
                                <button :disabled="loggingIn">Login</button>
                                <img v-show="loggingIn" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                <button v-on:click="signup">Sign up</button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

// exports the credentiels to the store authentication/login returns state-status and disabled the button untill the respond is returned
//model
export default {
    data () {
        return {
            Email: '',
            password: '',
            submitted: false
        }
    },
    //Viewmodel
    computed: {
        loggingIn () {
            return this.$store.state.authentication.status.loggingIn;
        }
    },
    created () {
        // reset login status
        this.$store.dispatch('authentication/logout');
    },
    methods: {
        handleSubmit () {
            this.submitted = true;
            const { Email, password } = this;
            const { dispatch } = this.$store;
            if (Email && password) {
                dispatch('authentication/login', { Email, password });
            }   
        },
        signup(){
            this.$router.push({ name: 'Register' });
        },
    }
}
</script>

<style scoped>
    .container{
        max-width: 360px;
    }
    button {
        background-color: red;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
        opacity: 0.9;
    }
    button:hover {
        opacity:1;
    }
    .signin {
        padding: 14px 20px;
        background-color: #0069D9;
    }
    .signin, .signup {
        float: left;
        width: 50%;
    }
    .clearfix::after {
        content: "";
        clear: both;
        display: table;
    }
</style>