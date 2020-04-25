<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    class="page-wrap"
    @submit.native.prevent="onSubmit"
  >
    <h3>Создание поста</h3>

    <el-form-item label="Заголовок поста" prop="title">
      <el-input v-model="controls.title" />
    </el-form-item>

    <el-form-item label="Тест в формате .md или .html" prop="text">
      <el-input v-model="controls.text" type="textarea" :rows="10" />
    </el-form-item>

    <el-button type="success" plain class="mb" @click="previewDialog = true"
      >Предпросмотр</el-button
    >

    <el-dialog title="Предпросмотр" :visible.sync="previewDialog" width="30%">
      <div :key="controls.text">
        <vue-markdown>{{ controls.text }}</vue-markdown>
      </div>
    </el-dialog>

    <el-upload
      ref="upload"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Перетащите картинку <em>или нажмите</em>
      </div>
      <div slot="tip" class="el-upload__tip">
        файлы с раширением jpg/png
      </div>
    </el-upload>

    <el-form-item>
      <el-button type="primary" native-type="submit" :loading="loading"
        >Создать пост</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
        title: '',
        text: ''
      },
      rules: {
        text: [
          {
            required: true,
            message: 'Введите текст',
            trigger: 'blur'
          }
        ],
        title: [
          {
            required: true,
            message: 'Название поста не может быть пустым',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw
    },
    onSubmit() {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.image) {
          this.loading = true

          const formData = {
            title: this.controls.title,
            text: this.controls.text,
            image: this.image
          }

          try {
            await this.$store.dispatch('post/create', formData)

            this.controls.text = ''
            this.controls.title = ''
            this.image = null

            this.$refs.upload.clearFiles()
            this.$message.success('Пост добавлен')
            this.loading = false
          } catch (error) {
          } finally {
            this.loading = false
          }
        } else {
          this.$message.warning('Форма не валидна')
        }
      })
    }
  }
}
</script>

<style scoped>
.page-wrap {
  width: 600px;
}
.mb {
  margin-bottom: 1rem;
}
</style>
