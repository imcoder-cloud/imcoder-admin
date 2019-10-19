<template>
  <div>
    <el-divider content-position="left">基础表格</el-divider>
    <el-row class="flex-wrap" :gutter="20">
      <el-col :xl="12" class="mb20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>一般表格</span>
          </div>
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="id" label="ID" width="70"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :xl="12" class="mb20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>条纹表格</span>
          </div>
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="id" label="ID" width="50"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="sex" label="性别" width="60"></el-table-column>
            <el-table-column prop="age" label="年龄" width="60"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :xl="12" class="mb20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>状态表格</span>
          </div>
          <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="id" label="ID" width="50"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="sex" label="性别" width="60"></el-table-column>
            <el-table-column prop="age" label="年龄" width="60"></el-table-column>
            <el-table-column prop="address" label="地址" width="200" show-overflow-tooltip></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :xl="12" class="mb20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>固定列</span>
          </div>
          <el-table :data="tableData" style="width: 100%">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="id" label="ID" width="50"></el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="sex" label="性别" width="60"></el-table-column>
            <el-table-column prop="age" label="年龄" width="60"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  class="padding-0"
                >查看</el-button>
                <el-button type="text" size="small" class="padding-0">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

    <el-divider content-position="left">数据表格</el-divider>

    <el-row :gutter="20">
      <el-col class="mb20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>分页表格</span>
            <div style="float:right;display:inlne-block;display: flex;align-items: center;">
              <el-radio-group v-model="styleValue" @change="styleChange">
                <el-radio label="false">无背景</el-radio>
                <el-radio label="true">有背景</el-radio>
              </el-radio-group>
              <el-checkbox-group
                v-model="pageOptions"
                @change="pageOptionsChange"
                style="margin-left: 35px;"
              >
                <el-checkbox label="total">总数</el-checkbox>
                <el-checkbox label="sizes">每页大小</el-checkbox>
                <el-checkbox label="prev">上一页</el-checkbox>
                <el-checkbox label="pager">分页栏</el-checkbox>
                <el-checkbox label="next">下一页</el-checkbox>
                <el-checkbox label="jumper">跳转</el-checkbox>
              </el-checkbox-group>
            </div>
          </div>
          <el-table :data="tableData" stripe style="width: 100%;margin-bottom:20px;">
            <el-table-column prop="id" label="ID" width="70"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="sex" label="性别" width="180"></el-table-column>
            <el-table-column prop="age" label="年龄" width="180"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
          <el-pagination
            :background="pageBackground"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-sizes="[10, 20, 30, 40, 50]"
            :page-size="10"
            :layout="optionsArr.join(',')"
            :total="100"
          ></el-pagination>
        </el-card>
      </el-col>
      <el-col class="mb20">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>树形表格</span>
          </div>
          <vxe-table border :data="tableData2" :tree-config="{children: 'children'}">
            <vxe-table-column type="index" width="100" title="序号"></vxe-table-column>
            <vxe-table-column field="name" title="名称" width="150" tree-node></vxe-table-column>
            <vxe-table-column field="size" title="大小" width="150"></vxe-table-column>
            <vxe-table-column field="date" title="日期"></vxe-table-column>
          </vxe-table>
        </el-card>
      </el-col>
    </el-row>

    <el-divider content-position="left">可编辑表格</el-divider>

    <el-row :gutter="30">
      <el-col :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>拖拽表格</span>
            <el-radio-group v-model="dropType" style="float:right" @change="dropTypeChange">
              <el-radio label="row">行拖动</el-radio>
              <el-radio label="col">列拖动</el-radio>
            </el-radio-group>
          </div>
          <!-- 行拖动 -->
          <vxe-table v-show="dropType == 'row'" border row-key ref="xTable1" :data="tableData">
            <vxe-table-column width="60" fixed>
              <template>
                <span class="drag-btn">
                  <i class="vxe-icon--menu"></i>
                </span>
              </template>
              <template v-slot:header>
                <vxe-tooltip v-model="showHelpTip1" content="按住后可以上下拖动排序！">
                  <i class="vxe-icon--question" @click="showHelpTip1 = !showHelpTip1"></i>
                </vxe-tooltip>
              </template>
            </vxe-table-column>
            <vxe-table-column field="name" title="姓名" width="120"></vxe-table-column>
            <vxe-table-column field="sex" title="性别" width="100"></vxe-table-column>
            <vxe-table-column field="age" title="年龄" width="100"></vxe-table-column>
            <vxe-table-column field="address" title="地址" show-overflow></vxe-table-column>
          </vxe-table>
          <!-- 列拖动 -->
          <vxe-table v-if="dropType == 'col'" border column-key ref="xTable2" :data="tableData">
            <vxe-table-column field="id" title="ID" width="60" fixed></vxe-table-column>
            <vxe-table-column field="name" title="姓名" width="120"></vxe-table-column>
            <vxe-table-column field="sex" title="性别" width="100"></vxe-table-column>
            <vxe-table-column field="age" title="年龄" width="100"></vxe-table-column>
            <vxe-table-column field="address" title="地址" show-overflow></vxe-table-column>
          </vxe-table>
        </el-card>
      </el-col>
      <el-col :xl="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>可编辑表格</span>
            <el-radio-group v-model="editType" style="float:right">
              <el-radio label="row">行编辑</el-radio>
              <el-radio label="cell">列编辑</el-radio>
            </el-radio-group>
          </div>
          <vxe-table
            border
            resizable
            show-overflow
            :data="tableData"
            :edit-config="{trigger: 'click', mode: editType}"
            @edit-actived="editActivedEvent"
            @edit-closed="editClosedEvent"
            :key="editTypeChange"
          >
            <vxe-table-column field="id" title="ID" width="60"></vxe-table-column>
            <vxe-table-column field="name" title="姓名" :edit-render="{name: 'input'}"></vxe-table-column>
            <vxe-table-column
              field="sex"
              title="性别"
              width="100"
              :edit-render="{name: 'select', options: [{label:'男',value:'男'},{label:'女',value:'女'}],optionProps: {value: 'value', label: 'label'}}"
            ></vxe-table-column>
            <vxe-table-column field="age" title="年龄" width="100" :edit-render="{name: 'input'}"></vxe-table-column>
            <vxe-table-column field="address" title="地址" :edit-render="{name: 'input'}"></vxe-table-column>
          </vxe-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  data() {
    return {
      pageBackground: false,
      styleValue: "false",
      optionsArr: ["total", "prev", "pager", "next"],
      pageOptions: ["total", "prev", "pager", "next"],
      showHelpTip1: false,
      dropType: "row",
      tableData: [
        {
          id: "1",
          name: "张三",
          sex: "男",
          age: 18,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "2",
          name: "李四",
          sex: "男",
          age: 22,
          address: "上海市静安区永兴路路 1518 弄 7 号 302"
        },
        {
          id: "3",
          name: "王五",
          sex: "男",
          age: 13,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "4",
          name: "李晓丽",
          sex: "女",
          age: 20,
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      editType: "row",
      tableData2: [
        {
          name: "资料",
          size: "1G",
          date: "2019-10-11 12:20:14",
          children: [
            {
              name: "公司资料",
              size: "1G",
              date: "2019-10-11 12:20:14",
              children: []
            },
            {
              name: "其他资料",
              size: "1G",
              date: "2019-10-11 12:20:14"
            }
          ]
        },
        {
          name: "娱乐",
          size: "1G",
          date: "2019-10-11 12:20:14",
          children: []
        },
        {
          name: "电影",
          size: "1G",
          date: "2019-10-11 12:20:14",
          children: []
        },
        {
          name: "文件",
          size: "1G",
          date: "2019-10-11 12:20:14",
          children: []
        }
      ]
    };
  },
  created() {
    this.rowDrop();
  },
  computed: {
    editTypeChange() {
      return this.editType;
    }
  },
  watch: {},
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    styleChange: function(value) {
      this.pageBackground = value == "true";
    },
    pageOptionsChange: function(value) {
      let arr = ['total','sizes','prev','pager','next','jumper']
      let rtnArr = []
      let temp = []
      value.forEach(item => {
        var index = arr.indexOf(item)
        temp[index] = item
      });
      temp.forEach(item => {
        rtnArr.push(item)
      });
      this.optionsArr = rtnArr;
      console.log(rtnArr);
    },
    dropTypeChange(val) {
      if (val == "col") {
        this.columnDrop();
      } else {
        this.rowDrop();
      }
    },
    rowDrop() {
      this.$nextTick(() => {
        let xTable = this.$refs.xTable1;
        Sortable.create(
          xTable.$el.querySelector(".body--wrapper>.vxe-table--body tbody"),
          {
            handle: ".drag-btn",
            onEnd: ({ newIndex, oldIndex }) => {
              let currRow = this.tableData.splice(oldIndex, 1)[0];
              this.tableData.splice(newIndex, 0, currRow);
            }
          }
        );
      });
    },
    columnDrop() {
      this.$nextTick(() => {
        let xTable = this.$refs.xTable2;
        Sortable.create(
          xTable.$el.querySelector(
            ".body--wrapper>.vxe-table--header .vxe-header--row"
          ),
          {
            handle: ".vxe-header--column:not(.col--fixed)",
            onEnd: ({ item, newIndex, oldIndex }) => {
              let { fullColumn, tableColumn } = xTable.getTableColumn();
              let targetThElem = item;
              let wrapperElem = targetThElem.parentNode;
              let newColumn = fullColumn[newIndex];
              if (newColumn.fixed) {
                // 错误的移动
                if (newIndex > oldIndex) {
                  wrapperElem.insertBefore(
                    targetThElem,
                    wrapperElem.children[oldIndex]
                  );
                } else {
                  wrapperElem.insertBefore(
                    wrapperElem.children[oldIndex],
                    targetThElem
                  );
                }
                return this.$XModal.message({
                  message: "固定列不允许拖动！",
                  status: "error"
                });
              }
              // 转换真实索引
              let oldColumnIndex = xTable.getColumnIndex(tableColumn[oldIndex]);
              let newColumnIndex = xTable.getColumnIndex(tableColumn[newIndex]);
              // 移动到目标列
              let currRow = fullColumn.splice(oldColumnIndex, 1)[0];
              fullColumn.splice(newColumnIndex, 0, currRow);
              xTable.loadColumn(fullColumn);
            }
          }
        );
      });
    },
    editActivedEvent({ row, column }, event) {
      console.log(`打开 ${column.title} 列编辑`);
    },
    editClosedEvent({ row, column }, event) {
      console.log(`关闭 ${column.title} 列编辑`);
    }
  }
};
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
.drag-btn {
  cursor: move;
  font-size: 12px;
}
</style>