<template>
  <v-container>
    <v-row class="text-center">
      <v-col md="6" offset-md="3">
        <v-card class="pa-4" outlined tile>
          <h2>Login</h2>
          <v-form v-model="valid">
            <v-text-field
              v-model="username"
              label="Usuário"
              required
              outlined
              append-icon="fa-user"
              v-on:keyup.enter="login"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              required
              outlined
              append-icon="fa-key"
              v-on:keyup.enter="login"
            ></v-text-field>

            <v-btn
              :loading="loading"
              :disabled="!valid"
              color="secondary"
              class="mr-4"
              x-large
              block
              @click="login"
              >Continuar <v-icon class="pl-3">fa-arrow-right</v-icon></v-btn
            >
          </v-form>
          <p class="ma-4">
            <span class="subtitle-1"
              >Não tenho conta! Fazer <a href="">Cadastro</a></span
            >
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TaskApi from '@/api/auth.api.js'

export default {
  data: () => {
    return {
      loading: false,
      valid: false,
      username: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.loading = true
      TaskApi.login(this.username, this.password)
        .then((resp) => {
          console.log('login ok', resp)
          this.$router.push({ name: 'taskList' })
        })
        .catch((error) => {
          console.log('login falhou', error)
          //mostrar toast de usuário ou senha inválidos
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
}
</script>
