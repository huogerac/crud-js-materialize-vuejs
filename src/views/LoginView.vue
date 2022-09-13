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
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false,
      valid: false,
    }
  },
  methods: {
    login() {
      this.$router.push({ name: 'taskList' })
    },
  },
}
</script>
