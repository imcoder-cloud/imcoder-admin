<template>
  <div class="wrapper">
    <el-form
      :model="userInfo"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="login-form"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input type="text" v-model="userInfo.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="userInfo.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="login()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Rules from "@/components/rules";
const rules = Rules.data().rules;
export default {
//   components: {
//     rules
//   },
  data() {
    return {
      userInfo: {
        userName: "",
        password: ""
      },
      rules: rules
    };
  },
  methods: {
    login: function() {
      this.$router.push({ path: "/index" });
    }
  }
};
</script>

<style scoped lang="scss" type="text/css">
.wrapper {
  width: 100%;
  .login-form {
    width: 30%;
    margin: auto;
    margin-top: 15%;
    .login-btn {
      width: 100%;
    }
  }
}
</style>
