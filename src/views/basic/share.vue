<template>
  <div class="share-demo mb20">
    <el-row>
      <el-col :md="24">
        <dd-share class="social-share" :share-config="config"></dd-share>
      </el-col>
      <el-col :md="24">
        <code>
          <!-- &lt;template&gt; <br> -->
          # 安装<br>
          npm install dd-share<br><br>
          # main.js<br>
          import DdShare from 'dd-share'<br>
          Vue.use(DdShare)<br><br>
          # 使用<br>
          &lt;dd-share class="social-share" :share-config="config"&gt;&lt;/dd-share&gt;<br>
          <!-- &lt;/template&gt; -->
        </code>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        url: "https://github.com/dongdong-cloud/dd-admin", // 网址，默认使用 window.location.href
        source: "https://github.com/dongdong-cloud/dd-admin", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: "dd-admin 一款强大的后台管理模板", // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description:
          "dd-admin-web是一个前端解决方案，基于 vue 2 和 element-ui 2.12.0 开发的后台管理模板。功能涵盖动态路由、富文本编辑、图表统计等多种丰富组件。能快速帮助中小型企业搭建后台产品模型。 https://dd-admin.ocreatech.com", // 描述, 默认读取head标签：<meta name="description" content="PHP弱类型的实现原理分析" />
        image: "", // 图片, 默认取网页中第一个img标签
        disabled: ["google", "facebook", "twitter"], // 禁用的站点，可用站点['weibo', 'qq', 'wechat', 'douban', 'qzone', 'linkedin', 'facebook', 'twitter', 'google']
        wechatQrcodeTitle: "微信扫一扫", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一扫</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.share-demo {
  margin-top: 200px;
  text-align: center;
  code {
    font-size: 15px;
    font-family: 微软雅黑;
    background: #eef1f6;
    width: 40%;
    display: inline-block;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
    line-height: 26px;
    text-align: left;
  }
}
</style>