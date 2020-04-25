<template>
  <el-card class="comment">
    <div class="comment-header">
      <span>Person name</span>
      <span><i class="el-icon-time"></i>{{ new Date().toLocaleString() }}</span>
    </div>
    <div class="comment-text">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque soluta
      hic repudiandae iste eveniet assumenda aliquam, eligendi cum ipsum illo?
      Eius cumque quod, quia iure tenetur ducimus aperiam dicta placeat?
    </div>
  </el-card>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['comment']
}
</script>

<style scoped>
.comment {
  margin-bottom: 1rem;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.comment-text {
  word-spacing: pre-line;
}
</style>
