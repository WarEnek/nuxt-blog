<template>
  <el-card shadow="always">
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h3>Вход в админку</h3>

      <el-form-item label="Логин" prop="login">
        <el-input v-model.trim="controls.login" />
      </el-form-item>

      <el-form-item label="Пароль" prop="password">
        <el-input v-model.trim="controls.password" type="password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading"
          >Войти</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  layout: 'empty',
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Введите логин',
            trigger: 'blur'
          }
        ],
        text: [
          {
            required: true,
            message: 'Введите пароль',
            trigger: 'blur'
          },
          {
            min: 6,
            message: 'Пароль не менее 6 символов',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {
    const { message } = this.$route.query

    switch (message) {
      case 'login':
        this.$message.info('Для начала войдите в админку')
        break
      case 'logout':
        this.$message.success('Выход успешен')
        break
      case 'session':
        this.$message.warning('Время сессии истекло')
        break
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/login', formData)
            this.$router.push('/admin')
          } catch (error) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style></style>
