<template>
  <div>
    <el-alert title="温馨提示" type="success" class="wxts">
      <slot>
        本后台模板为静态模板，所有数据均为测试数据，均未与后台交互。如果此模板能够帮助您，烦请给本项目点个 star 谢谢。<br />
        github 地址：
        <a href="https://github.com/dongdong-cloud/dd-admin-web" target="_blank">https://github.com/dongdong-cloud/dd-admin-web</a> &nbsp;&nbsp;&nbsp;
        码云地址：
        <a href="https://gitee.com/dongdong-cloud/dd-admin-web" target="_blank">https://gitee.com/dongdong-cloud/dd-admin-web</a>
      </slot>
    </el-alert>

    <el-row :gutter="30">
      <el-col :span="6">
        <el-card>
          <div class="tj-card">
            <i class="fa fa-paper-plane fa-3x color-ll"></i>
            <div class="item">
              <div class="item-title">今日浏览</div>
              <div class="item-desc">387</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="tj-card">
            <i class="fa fa-users fa-3x color-yh"></i>
            <div class="item">
              <div class="item-title">新用户</div>
              <div class="item-desc">86</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="tj-card">
            <i class="fa fa-shopping-bag fa-3x color-dd"></i>
            <div class="item">
              <div class="item-title">今日订单</div>
              <div class="item-desc">273</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="tj-card">
            <i class="fa fa-money fa-3x color-sr"></i>
            <div class="item">
              <div class="item-title">今日收入</div>
              <div class="item-desc">38732</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="30" class="mt30">
      <el-col :span="16">
        <el-card>
          <div id="line_chart" style="height:400px;"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div id="pie_chart" style="height:400px;"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="30" class="mt30">
      <el-col :span="12">
        <el-card>
          <div id="histogram_chart" style="height:500px;"></div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div id="china_chart" style="height:500px;"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
import china from "echarts/map/json/china.json";
echarts.registerMap("china", china);
export default {
  data() {
    return {};
  },
  mounted() {
    this.initLineChart();
    this.initPieChart();
    this.initHistogramChart();
    this.initChinaChart();
  },
  methods: {
    initLineChart: function() {
      var myChart = echarts.init(document.getElementById("line_chart"));
      var option = {
        title: {
          text: "数据统计"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["用户量", "订单量", "营业额"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "用户量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "订单量",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "营业额",
            type: "line",
            stack: "总量",
            smooth: true,
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    initPieChart: function() {
      var myChart = echarts.init(document.getElementById("pie_chart"));
      var option = {
        title: {
          text: "用户访问来源",
          subtext: "测试数据",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    initHistogramChart: function() {
      var myChart = echarts.init(document.getElementById("histogram_chart"));
      var option = {
        title: {
          text: "用户访问来源"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        series: [
          {
            name: "直接访问",
            type: "bar",
            stack: "总量",
            barWidth: 35,
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
          },
          {
            name: "邮件营销",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: "联盟广告",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: "视频广告",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [150, 212, 201, 154, 190, 330, 410]
          },
          {
            name: "搜索引擎",
            type: "bar",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    initChinaChart: function() {
      var myChart = echarts.init(document.getElementById("china_chart"));
      var option = {
        title: {
          text: "订单来源",
          x: "center"
        },
        tooltip: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            restore: {}
          }
        },
        visualMap: {
          min: 0,
          max: 500,
          left: "left",
          top: "bottom",
          text: ["High", "Low"],
          seriesIndex: [1],
          inRange: {
            color: ["#e0ffff", "#006edd"]
          },
          calculable: true
        },
        geo: {
          map: "china",
          roam: true,
          label: {
            normal: {
              show: true,
              textStyle: {
                color: "rgba(0,0,0,0.4)"
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)"
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        },
        series: [
          {
            type: "scatter",
            coordinateSystem: "geo",
            data: [],
            symbolSize: 20,
            symbol:
              "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z",
            symbolRotate: 35,
            label: {
              normal: {
                formatter: "{b}",
                position: "right",
                show: false
              },
              emphasis: {
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#F06C00"
              }
            }
          },
          {
            name: "订单量",
            type: "map",
            geoIndex: 0,
            tooltip: { show: true },
            data: [
              { name: "北京", value: this.randomData(500) },
              { name: "天津", value: this.randomData(500) },
              { name: "上海", value: this.randomData(500) },
              { name: "重庆", value: this.randomData(500) },
              { name: "河北", value: this.randomData(500) },
              { name: "河南", value: this.randomData(500) },
              { name: "云南", value: this.randomData(500) },
              { name: "辽宁", value: this.randomData(500) },
              { name: "黑龙江", value: this.randomData(500) },
              { name: "湖南", value: this.randomData(500) },
              { name: "安徽", value: this.randomData(500) },
              { name: "山东", value: this.randomData(500) },
              { name: "新疆", value: this.randomData(500) },
              { name: "江苏", value: this.randomData(500) },
              { name: "浙江", value: this.randomData(500) },
              { name: "江西", value: this.randomData(500) },
              { name: "湖北", value: this.randomData(500) },
              { name: "广西", value: this.randomData(500) },
              { name: "甘肃", value: this.randomData(500) },
              { name: "山西", value: this.randomData(500) },
              { name: "内蒙古", value: this.randomData(500) },
              { name: "陕西", value: this.randomData(500) },
              { name: "吉林", value: this.randomData(500) },
              { name: "福建", value: this.randomData(500) },
              { name: "贵州", value: this.randomData(500) },
              { name: "广东", value: this.randomData(500) },
              { name: "青海", value: this.randomData(500) },
              { name: "西藏", value: this.randomData(500) },
              { name: "四川", value: this.randomData(500) },
              { name: "宁夏", value: this.randomData(500) },
              { name: "海南", value: this.randomData(500) },
              { name: "台湾", value: this.randomData(500) },
              { name: "香港", value: this.randomData(500) },
              { name: "澳门", value: this.randomData(500) }
            ]
          }
        ]
      };
      myChart.setOption(option);
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    randomData: function(num) {
      return Math.round(Math.random() * num);
    }
  }
};
</script>

<style lang="scss" scoped>
.wxts {
  margin-bottom: 20px;
  a {
    color: #67c23a;
  }
}
.tj-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .color-ll {
    color: #34bfa3;
  }
  .color-yh {
    color: #d633ad;
  }
  .color-dd {
    color: #d65e0e;
  }
  .color-sr {
    color: #f5c802;
  }
  .item {
    .item-title {
      padding: 10px;
      color: #909399;
    }
    .item-desc {
      padding: 10px;
      font-size: 28px;
      font-weight: bolder;
    }
  }
}
</style>
