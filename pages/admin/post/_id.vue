<template>
  <div class="page-wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{ post.title }}</el-breadcrumb-item>
    </el-breadcrumb>
    post {{ $route.params.id }}
    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent="onSubmit"
    >
      <h3>Обновить пост</h3>

      <el-form-item label="Тест в формате .md или .html" prop="text">
        <el-input v-model="controls.text" type="textarea" :rows="10" />
      </el-form-item>

      <small style="margin-bottom: 15px;">
        <div>
          <i class="el-icon-time"></i>
          <span>{{ new Date(post.date).toLocaleString() }}</span>
        </div>
        <div>
          <i class="el-icon-view"></i>
          <span>{{ post.views }}</span>
        </div>
      </small>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="loading"
          >Обновить</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({ store, params }) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return { post }
  },
  validate({ params }) {
    return !!params.id
  },
  data() {
    return {
      loading: false,
      controls: {
        text: ''
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Введите текст',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  mounted() {
    this.controls.text = this.post.text
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true

          const formData = {
            text: this.controls.text,
            id: this.post._id
          }

          try {
            await this.$store.dispatch('post/update', formData)
            this.$message.success('Пост обновлён')
            this.loading = false
          } catch (error) {
            this.loading = false
          }
        }
      })
    }
  },
  head() {
    return {
      title: `Пост | ${this.post.title}`
    }
  }
}
</script>

<style scoped>
.page-wrap {
  width: 600px;
}
</style>
