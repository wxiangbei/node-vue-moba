<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}广告位</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      model: {},
    }
  },
  created () {
    this.fetchParents()
    this.id && this.fetch()
  },
  methods: {
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model)
        console.log(res)
      } else {
        res = await this.$http.post('rest/ads', this.model)
        console.log(res)
      }
      this.$router.push('/ads/list')
    },
    async fetch () {
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = res.data
    },
  },
}
</script>

<style>
</style>