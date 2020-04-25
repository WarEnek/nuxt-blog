<template>
  <el-table :data="posts" style="width: 100%">
    <el-table-column prop="title" label="Название" />
    <el-table-column label="Дата">
      <template slot-scope="{ row: { date } }">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{
          new Date(date).toLocaleString()
        }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Комментарии">
      <template slot-scope="{ row: { comments } }">
        <i class="el-icon-message"></i>
        <span style="margin-left: 10px">{{ comments.length }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Просмотры">
      <template slot-scope="{ row: { views } }">
        <i class="el-icon-view"></i>
        <span style="margin-left: 10px">{{ views }}</span>
      </template>
    </el-table-column>
    <el-table-column label="Действия">
      <template slot-scope="{ row }">
        <el-tooltip effect="dark" content="Открыть пост" placement="top-start">
          <el-button size="mini" @click="open(row._id)">Открыть</el-button>
        </el-tooltip>

        <el-tooltip effect="dark" content="Удалить пост" placement="top-start">
          <el-button size="mini" type="danger" @click="remove(row._id)"
            >Удалить</el-button
          >
        </el-tooltip>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({ store }) {
    const posts = await store.dispatch('post/fetchAdmin')
    return { posts }
  },
  methods: {
    open(id) {
      this.$router.push(`/admin/post/${id}`)
    },
    async remove(id) {
      try {
        await this.$confirm('Удалить пост?', 'Внимание!', {
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cancel',
          type: 'warning'
        })
        await this.$store.dispatch('post/remove', id)
        this.posts = this.posts.filter((post) => post._id !== id)

        this.$message.success('Пост удалён')
      } catch (error) {}
    }
  }
}
</script>

<style></style>
