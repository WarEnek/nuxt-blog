<template>
  <el-card shadow="hover" :body-style="{ padding: 0 }" class="post">
    <header slot="header" class="post-header">
      <h3>Post title</h3>
      <small
        ><i class="el-icon-time"></i>{{ new Date().toLocaleString() }}</small
      >
    </header>
    <div class="post-body">
      <img src="" alt="" class="post-img" />
    </div>
    <footer class="post-footer">
      <el-link type="primary" href="#" @click="openPost()">Открыть</el-link>
      <span>
        <i class="el-icon-s-comment"></i>
        13
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  methods: {
    openPost() {
      this.$router.push(`/post/${this.post.id}`)
    }
  }
}
</script>

<style scoped>
.post {
  height: 200px;
  margin-bottom: 2rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-img {
  width: 100%;
  height: auto;
}

.post-body {
  /* margin-bottom: 1rem; */
}

.post-footer {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
