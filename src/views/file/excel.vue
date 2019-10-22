<template>
  <div>
    <input type="file" @change="impotExcel" accept=".xls, .xlsx" />
    <div style="height: 500px;">{{jsonData}}</div>
  </div>
</template>

<script>
import XLSX from "xlsx";
export default {
  data() {
    return {
      jsonData: null
    };
  },
  methods: {
    impotExcel(e) {
      let that = this
      let files = e.target.files;
      let f = files[0];
      let reader = new FileReader();
      reader.onload = function(e) {
        let data = new Uint8Array(e.target.result);
        var workbook = XLSX.read(data, { type: "array" });
        let json = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet1); // 取第一个sheet
        that.jsonData = json;
      };
      reader.readAsArrayBuffer(f);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>