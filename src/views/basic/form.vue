<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="10" class="mb20">
        <el-card>
          <div slot="header" class="clearfix">
            <span>垂直表单</span>
            <el-radio-group v-model="labelPosition" style="float:right;">
              <el-radio label="left">左对齐</el-radio>
              <el-radio label="right">右对齐</el-radio>
              <el-radio label="top">上对齐</el-radio>
            </el-radio-group>
          </div>
          <el-form
            :model="formObj"
            :label-position="labelPosition"
            :rules="rules"
            ref="formObj1"
            label-width="100px"
            class="vertical-form"
          >
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="formObj.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="formObj.region" filterable placeholder="请选择活动区域">
                <el-option label="上海" value="shanghai"></el-option>
                <el-option label="北京" value="beijing"></el-option>
                <el-option label="合肥" value="hefei"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-row>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="formObj.date1"
                      style="width: 100%;"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="formObj.date2"
                      style="width: 100%;"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="formObj.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="formObj.type">
                <el-checkbox label="美食" name="type"></el-checkbox>
                <el-checkbox label="地推" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="formObj.resource">
                <el-radio label="赞助"></el-radio>
                <el-radio label="免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动人数" prop="count">
              <el-input-number v-model="formObj.count" size="medium"></el-input-number>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="formObj.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('formObj1')">立即创建</el-button>
              <el-button @click="resetForm('formObj1')">重置</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <el-col :md="14" class="mb20">
        <el-card>
          <div slot="header" class="clearfix">
            <span>一行多列表单</span>
          </div>
          <el-form
            :model="formObj"
            :rules="rules"
            ref="formObj2"
            label-width="100px"
            class="vertical-form"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item label="活动名称" prop="name">
                  <el-input v-model="formObj.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动区域" prop="region">
                  <el-select v-model="formObj.region" filterable placeholder="请选择活动区域">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                    <el-option label="合肥" value="hefei"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item prop="date1" label="活动时间" required>
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="formObj.date1"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="即时配送" prop="delivery">
                  <el-switch v-model="formObj.delivery"></el-switch>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="活动性质" prop="type">
                  <el-checkbox-group v-model="formObj.type">
                    <el-checkbox label="美食" name="type"></el-checkbox>
                    <el-checkbox label="地推" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="特殊资源" prop="resource">
                  <el-radio-group v-model="formObj.resource">
                    <el-radio label="赞助"></el-radio>
                    <el-radio label="免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="行程方式" prop="trip">
                  <el-radio-group v-model="formObj.trip">
                    <el-radio label="飞机"></el-radio>
                    <el-radio label="高铁"></el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="活动人数" prop="count">
                  <el-input-number v-model="formObj.count" size="medium"></el-input-number>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="计划进度" prop="jindu">
                  <el-slider v-model="formObj.jindu"></el-slider>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="活动等级" prop="level">
                  <el-rate
                    v-model="formObj.level"
                    show-text
                    :texts="formObj.texts"
                    style="margin-top: 10px;"
                  ></el-rate>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="图片上传">
                  <el-upload
                    class
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="1"
                    :on-exceed="handleExceed"
                    :file-list="formObj.fileList"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item label="活动形式" prop="desc">
                  <el-input type="textarea" v-model="formObj.desc"></el-input>
                </el-form-item>
              </el-col>
              <el-col>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('formObj2')">立即创建</el-button>
                  <el-button @click="resetForm('formObj2')">重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card>
          <div slot="header" class="clearfix">
            <span>行内表单</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <el-form :inline="true" :model="formInline" label-width="100px;">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动名称">
              <el-input v-model="formInline.name" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formInline.date"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">查询</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import rules from "@/config/rules";
export default {
  data() {
    return {
      labelPosition: "right",
      formObj: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: ["美食"],
        resource: "",
        desc: "",
        trip: "高铁",
        count: 10,
        jindu: 30,
        level: 4,
        texts: ["极低", "低", "中", "高", "极高"],
        color: "#409EFF",
        fileList: []
      },
      horizontalForm: {
        user: "",
        region: ""
      },
      formInline: {
        user: "",
        region: "",
        name: "",
        date: ""
      },
      rules: rules.formRules
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>

<style lang="scss" scoped>
.vertical-form {
  .line {
    text-align: center;
  }
}
</style>>
