<template>
  <div>
    <el-scrollbar class="full-height" ref="floorScroll">
      <div class="floor-main" :style="{'height':height?height:'600px;'}" id="main">
        <slot></slot>
        <div class="floor-name" id="floor">
          <ul id="floorUl">
            <li v-for="item in floorItems" :key="item.name">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  props: ["floorItems", "height"],
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var that = this;
      var main = document.getElementById("main");
      var floor = document.getElementById("floor");
      var floorItem = main.getElementsByClassName("floor-item");
      var floorUl = document.getElementById("floorUl");
      var li = floorUl.getElementsByTagName("li");
      li[0].className = "active";
      let mainScroll = this.$refs.floorScroll.wrap;
      mainScroll.onscroll = function() {
        let ele = that.$refs.floorScroll.wrap;
        var scrollTop = ele.scrollTop;
        // 可见区域高
        var height = ele.clientHeight;
        var num = 0;
        // 遍历所有item
        for (var i = 0; i < floorItem.length; i++) {
          // 判断：滚动条距离顶部的距离 大于等于 第i个元素顶部 到 父元素顶部 的距离，则 num = i
          if (scrollTop >= floorItem[i].offsetTop) {
            num = i;
          }

          // 因为是循环 所以所有的li的类名都被清空
          li[i].className = "";
        }
        // 给单独第num个li添加类名（这里使用的是排他思想）
        li[num].className = "active";

        // 遍历所有li
        for (var i = 0; i < li.length; i++) {
          // 给每一个li绑定点击事件 点击时
          li[i].onclick = function() {
            // 遍历所有li
            for (var j = 0; j < li.length; j++) {
              // 判断：如果我 点击的这个 和 循环的 是同一个元素
              // this指向：此时 this 指向 当前点击元素
              if (this == li[j]) {
                // 则 滚动条距离顶部的高 就等于 第j个图片顶部 到 父元素顶部 的距离
                let offsetTop = floorItem[j].offsetTop;
                if (ele.scrollTop < offsetTop) {
                  that.scrollDown(ele, offsetTop);
                } else if (ele.scrollTop > offsetTop) {
                  that.scrollUp(ele, offsetTop);
                }
              }
            }
          };
        }
      };
    },
    scrollDown(ele, offsetTop) {
      if (ele.scrollTop < offsetTop) {
        setTimeout(() => {
          // 步进速度
          let step = 50;
          if (offsetTop - ele.scrollTop < step) {
            step = offsetTop - ele.scrollTop;
          }
          ele.scrollTop = ele.scrollTop + step;
          this.scrollDown(ele, offsetTop);
        }, 1);
      }
    },
    scrollUp(ele, offsetTop) {
      if (ele.scrollTop > offsetTop) {
        setTimeout(() => {
          let step = 50;
          if (ele.scrollTop - offsetTop < step) {
            step = ele.scrollTop - offsetTop;
          }
          ele.scrollTop = ele.scrollTop - step;
          this.scrollUp(ele, offsetTop);
        }, 1);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.floor-main {
  margin: auto;
}
.floor-name {
  position: absolute;
  top: 20px;
  right: 50px;
}
.floor-name ul li {
  padding: 5px 20px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.active {
  background-color: rgb(217, 236, 255);
}
</style>