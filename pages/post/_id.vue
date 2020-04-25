<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>
      <div class="post-info">
        <small
          ><i class="el-icon-time"></i>{{ new Date().toLocaleString() }}</small
        >
        <small>
          <i class="el-icon-view"></i>
          45
        </small>
      </div>
      <div class="post-image">
        <img src="" alt="" />
      </div>
    </header>
    <main class="post-content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dolorem dolorum, beatae veritatis quidem eveniet quisquam iusto! Labore
        ullam laudantium et adipisci voluptatem minus fugiat, pariatur dolorem
        eius. Velit, iure!
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dolorem dolorum, beatae veritatis quidem eveniet quisquam iusto! Labore
        ullam laudantium et adipisci voluptatem minus fugiat, pariatur dolorem
        eius. Velit, iure!
      </p>
    </main>
    <footer>
      <!-- Form -->
      <app-comment-form v-if="canAddComment" @created="createCommentHandler" />

      <div v-if="true" class="comments">
        <app-comment v-for="comment in 4" :key="comment" :comment="comment" />
      </div>
      <div v-else class="text-center">
        Комментариев нет
      </div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  validate({ params }) {
    return !!params.id
  },
  components: { AppComment, AppCommentForm },
  data() {
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler() {
      this.canAddComment = false
    }
  }
}
</script>

<style scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-title,
.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}
.post-title {
  margin-bottom: 1rem;
}
.post-info {
  margin-bottom: 0.5rem;
}
.post-image img {
  width: 100%;
  height: auto;
}

.post-header {
  margin-bottom: 0.5rem;
}

.post-content {
  margin-bottom: 0.5rem;
}
</style>
