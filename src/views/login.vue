<template>
  <div class="wrapper">
    <el-form
      :model="userInfo"
      status-icon
      :rules="rules"
      ref="loginForm"
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
import rules from "@/config/rules";
import Auth from "@/auth";
import User from "@/json/user";
export default {
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
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 模拟登录成功
          if (
            this.userInfo.userName == User.userName &&
            this.userInfo.password == User.password
          ) {
            Auth.setToken("123456789");
            // this.$store.dispatch('setRouters', User.routers)
            this.$router.push({ path: "/index" });
          } else {
            console.log("用户名或密码错误");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
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
