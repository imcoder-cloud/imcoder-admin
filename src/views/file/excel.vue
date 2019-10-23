<template>
  <div>
    <el-row class="mb20">
      <el-alert title="温馨提示" type="success">
        <slot>
          本页面为为纯静态页面，均未与后端进行交互，导入导出均为前端操作，在前端进行数据解析能够减轻后端服务的压力。
        </slot>
      </el-alert>
    </el-row>
    <el-divider content-position="left">Excel 导出</el-divider>
    <el-row class="mb20">
      <el-col>
        <el-card>
          <div slot="header" class="clearfix">
            <el-button size="small" type="primary" @click="exportExcel">导出Excel</el-button>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            @selection-change="handleSelectionChange"
            style="width: 100%"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-divider content-position="left">Excel 导入</el-divider>
    <el-row class="mb20">
      <el-upload
        action="/xxx/xxx"
        accept=".xls, .xlsx"
        :on-change="impotExcel"
        :auto-upload="false"
        multiple
        :limit="1"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传 .xls .xlsx 文件，且不超过500kb</div>
      </el-upload>
    </el-row>
    <el-row :gutter="20">
      <el-col :md="12">
        <el-card style="min-height:400px;">
          <div slot="header" class="clearfix">
            <span>原始 json</span>
          </div>
          <div style>{{jsonData}}</div>
        </el-card>
      </el-col>
      <el-col :md="12">
        <el-card style="min-height:400px;">
          <div slot="header" class="clearfix">
            <span>格式化后 json</span>
          </div>
          <json v-model="jsonStr"></json>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import XLSX from "xlsx";
import Json from "@/components/json";
export default {
  components: {
    Json
  },
  data() {
    return {
      tableData: [
        {
          date: "2019-05-03",
          name: "张三",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-05-02",
          name: "李四",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-05-04",
          name: "王五",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-05-01",
          name: "小丽",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-05-08",
          name: "小红",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-05-06",
          name: "小美",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2019-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      fileList: [],
      jsonData: null,
      jsonStr: ""
    };
  },
  methods: {
    exportExcel() {
      //创建book
      var wb = XLSX.utils.book_new();
      //json转sheet
      var ws = XLSX.utils.json_to_sheet(this.multipleSelection, {});
      //设置列宽
      ws["!cols"] = [
        { width: 15 },
        { width: 15 },
        { width: 30 }
      ];
      var timestamp = new Date().getTime();
      //sheet写入book
      XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
      //输出
      XLSX.writeFile(wb, "file_" + timestamp + ".xlsx");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    impotExcel(file, fileList) {
      let that = this;
      let f = file.raw;
      let reader = new FileReader();
      reader.onload = function(e) {
        let data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: "array" });
        let json = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1); // 取第一个sheet
        that.jsonData = json;
        that.jsonStr = JSON.stringify(json);
      };
      reader.readAsArrayBuffer(f);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>