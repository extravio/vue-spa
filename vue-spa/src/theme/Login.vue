<template>
  <div class="content">
    <div v-if="isAuthenticated">
        Hello authenticated user
        <button class="button is-primary" v-on:click="logout()">
				Log out
        </button>
    </div>
    <div v-else>
	<h2>Login</h2>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Username</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input class="input" type="text" v-model="username"
			  placeholder="Your username">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label is-normal">
		  <label class="label">Password</label>
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <input class="input" type="password" v-model="password"
			  placeholder="Your password">
			</div>
		  </div>
		</div>
	</div>
	<div class="field is-horizontal">
		<div class="field-label">
		  <!-- Left empty for spacing -->
		</div>
		<div class="field-body">
		  <div class="field">
			<div class="control">
			  <button class="button is-primary" v-on:click="login()">
				Login
			  </button>
			</div>
		  </div>
		</div>
	</div>
    </div><!-- end v-else -->
</div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        username: '', 
        password: '',
      }
    },
    computed: {
        ...mapGetters(['isAuthenticated'])
    },
    methods: {
        ...mapActions({
            logout: 'logout'    // when logout is called in the component, vuex will trigger this.$store.dispatch('logout')
        }),
        login() {
            this.$store.dispatch('login', { username: this.username, password: this.password })
                .then(() => {
                    this.username = ''
                    this.password = ''
                })
        }
    }
  }
</script>