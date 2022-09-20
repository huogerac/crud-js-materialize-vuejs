<template>
  <v-container>
    <!-- snackbar -->
    <v-snackbar v-model="snackbar.show" :value="true" absolute left shaped top>
      {{ snackbar.message }}
    </v-snackbar>
    <v-row class="text-center">
      <v-col md="6" offset-md="3">
        <v-card class="pa-4 rounded mt-6" outlined tile>
          <h2>Cadastro</h2>
          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              :rules="nameRules"
              label="Nome Completo"
              required
              outlined
              append-icon="fa-user"
            ></v-text-field>
            <v-text-field
              v-model="username"
              :rules="usernameRules"
              label="Usuário"
              required
              outlined
              append-icon="fa-user"
            ></v-text-field>

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              required
              outlined
              append-icon="fa-key"
            ></v-text-field>

            <v-text-field
              v-model="passwordConfirm"
              :rules="[passwordConfirmRules]"
              label="Confrimar Senha"
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
              @click="signup"
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
import AuthApi from '@/api/auth.api.js'

export default {
  data: () => {
    return {
      loading: false,
      valid: false,
      name: '',
      username: '',
      password: '',
      passwordConfirm: '',
      nameRules: [(v) => !!v || 'Nome é obrigatório'],
      usernameRules: [(v) => !!v || 'Nome é obrigatório'],
      snackbar: {
        show: false,
        message: '',
      },
    }
  },
  methods: {
    signup() {
      AuthApi.signup(this.name, this.username, this.password)
        .then((data) => {
          console.log('data', data)
          this.$router.push({ name: 'login' })
        })
        .catch((error) => {
          console.log('chegou um erro aqui gente:', error)
        })
    },
    passwordConfirmRules() {
      if (this.password != this.passwordConfirm) {
        return 'Senhas não conferem!'
      }
      return true
    },
  },
}
</script>
