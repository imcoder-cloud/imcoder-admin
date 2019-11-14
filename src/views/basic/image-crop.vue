<template>
  <div class="crop-demo">
    <el-form :inline="true">
      <el-form-item>
        宽度：
        <el-input type="number" style="width:100px" v-model="width"></el-input>
      </el-form-item>
      <el-form-item>
        高度：
        <el-input type="number" style="width:100px" v-model="height"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="noCircle">关闭圆形预览</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="noSquare">关闭方形预览</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="noRotate">关闭旋转图像</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button @click="toggleShow">上传图片</el-button>
      </el-form-item>
    </el-form>
    <image-crop
      v-model="show"
      @crop-success="cropSuccess"
      @crop-upload-success="cropUploadSuccess"
      @crop-upload-fail="cropUploadFail"
      :width="imgWidth"
      :height="imgHeight"
      :no-circle="noCircle"
      :no-square="noSquare"
      :no-rotate="noRotate"
      field="avatar"
      img-format="png"
      url="https://httpbin.org/post"
    ></image-crop>
    <div class="image-demo">
      <img :src="imgDataUrl" />
    </div>
  </div>
</template>

<script>
import ImageCrop from "vue-image-crop-upload";
import { get } from "http";
export default {
  components: {
    ImageCrop
  },
  computed: {
    imgWidth: {
      get() {
        return parseInt(this.width);
      },
      set(value) {
        this.width = parseInt(this.value);
      }
    },
    imgHeight: {
      get() {
        return parseInt(this.height);
      },
      set(value) {
        this.height = parseInt(this.value);
      }
    }
  },
  data() {
    return {
      show: false,
      imgDataUrl: "",
      width: 200,
      height: 200,
      noCircle: false,
      noSquare: false,
      noRotate: false
    };
  },
  methods: {
    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.avatar;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    }
  }
};
</script>

<style lang="scss" scoped>
.crop-demo {
  width: 70%;
  margin: auto;
  text-align: center;
  .image-demo {
    padding: 20px 0;
    text-align: center;
  }
}
</style>
