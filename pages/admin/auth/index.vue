<template>
  <div class="admin-auth-page">
    <div class="auth-container">
      <form @submit.prevent="onSubmit">
        <AppControlInput v-model="email" type="email">E-Mail Address</AppControlInput>
        <AppControlInput v-model="password" type="password">Password</AppControlInput>
        <AppButton type="submit">{{ isLogin ? 'Login' : 'Sign Up' }}</AppButton>
        <AppButton
          type="button"
          btn-style="inverted"
          style="margin-left: 10px"
          @click="isLogin = !isLogin">Switch to {{ isLogin ? 'Signup' : 'Login' }}</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: 'AdminAuthPage',
  layout: 'admin',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
    //  return this.$axios.$post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + 
    //   process.env.fbAPIKey, {
    //     email: this.email ,
    //     password: this.password, 
    //     returnSecureToken: true
    //   })
    //   .then(res => {
    //     console.log('[res]', res)
    //   })
    //   .catch(err => console.log(err))
    console.log(this.isLogin);
      if(!this.isLogin) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(res => console.log(res))
          .catch(err => console.log(err))
      }else {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(res => {
            console.log(res)
          })
          .catch(err => {
            this.$router.push('/')
          })
      }
    }
  },
  beforeCreate() {
    console.log('[process.env.fbAPIKey]', process.env.fbAPIKey)
  }
}
</script>

<style scoped>
.admin-auth-page {
  padding: 20px;
}

.auth-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px #ccc;
  width: 300px;
  margin: auto;
  padding: 10px;
  box-sizing: border-box;
}
</style>
