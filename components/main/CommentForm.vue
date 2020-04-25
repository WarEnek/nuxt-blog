<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent="onSubmit"
  >
    <h3>Добавить комментарий</h3>

    <el-form-item label="Ваше имя" prop="name">
      <el-input v-model.trim="controls.name" />
    </el-form-item>

    <el-form-item label="Текст комментария" prop="text">
      <el-input
        v-model.trim="controls.text"
        type="textarea"
        resize="none"
        :rows="2"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" native-type="submit" :loading="loading"
        >Create</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      controls: {
        name: '',
        text: ''
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Введите имя',
            trigger: 'blur'
          }
        ],
        text: [
          {
            required: true,
            message: 'Введите комментарий',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.loading = true

          // const formData = {
          //   name: this.controls.name,
          //   text: this.controls.text,
          //   postId: ''
          // }
          try {
            this.$emit('created')
            this.$message.success('Комментарий добавлен')
          } catch (error) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style scoped></style>
