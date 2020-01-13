<template>
  <section class="login">
    <div class="container">
      <div class="row mt-4">
        <div class="col-1">
          <router-link to="/">
            <div class="home-btn">
              <i class="fas fa-arrow-circle-left"></i>
            </div>
          </router-link>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-md-4 col-12">
          <form @submit="submit" class="form-wrapper">
            <div class="form-group text-left">
              <label for="email">E-post</label>
              <input v-model="email" type="email" class="form-control input" placeholder id="email" />

              <label for="password">Lösenord</label>
              <input
                v-model="password"
                type="password"
                class="form-control input"
                placeholder
                id="pwd"
              />
            </div>
            <button type="submit" class="btn btn-primary login-btn">
              <div v-if="this.loading" class="spinner-border spinner-border-sm" />
              <span v-else>Logga in</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class LoginComponent extends Vue {
  private email: string = "";
  private password: string = "";
  private loading: boolean = false;
  private loggedIn: boolean = false;

  private updated() {
    console.log(this.email);
  }
  private submit(e: any) {
    e.preventDefault();
    this.loading = true;
  }
}
</script>
<style scoped lang="scss">
.login {
  .home-btn {
    color: var(--primary);
    font-size: 50px;
  }
  .home-btn:hover {
    color: var(--hover);
  }
  .form-wrapper {
    border-radius: 3px;
    background-color: #f5f5f5;
    .input {
      outline: none;
    }
    .login-btn {
      width: 100%;
      outline: none;
      background-color: var(--primary);
    }
  }
}
</style>