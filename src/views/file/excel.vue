<template>
  <div>
    <input type="file" @change="impotExcel" accept=".xls, .xlsx" />
    <el-row :gutter="20">
      <el-col :md="12">
        <div style>{{jsonData}}</div>
      </el-col>
      <el-col :md="12">
        <json v-model="jsonStr"></json>
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
      jsonData: null,
      jsonStr: ""
    };
  },
  methods: {
    impotExcel(e) {
      let that = this;
      let files = e.target.files;
      let f = files[0];
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