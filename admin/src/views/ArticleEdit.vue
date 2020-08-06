<template>
  <div>
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px"
             @submit.native.prevent="save">
      <el-form-item label="上级所属">
        <el-select v-model="model.categories"
                   multiple>
          <el-option v-for="item in categories"
                     :key="item._id"
                     :label="item.name"
                     :value="item._id">

          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <VueEditor useCustomImageHandler
                   @image-added="handleImageAdded"
                   v-model="model.body"></VueEditor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary"
                   native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },
  components: {
    VueEditor
  },
  data () {
    return {
      categories: [],
      model: {},
    }
  },
  created () {
    this.fetchCategories()
    this.id && this.fetch()
  },
  methods: {
    afterUpload (res) {
      this.$set(this.model, "icon", res.url)
    },
    async save () {
      let res
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model)
        console.log(res)
      } else {
        res = await this.$http.post('rest/articles', this.model)
        console.log(res)
      }
      this.$router.push('/articles/list')
    },
    async fetch () {
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchCategories () {
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },

  },
}
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>