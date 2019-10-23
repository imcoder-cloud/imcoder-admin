<template>
  <div>
    <el-row>
      <el-alert title="温馨提示" type="success">
        <slot>
          本页面为简单 PDF 预览页面。由于 PDF 文件可在浏览器直接打开，故此页面只引入外部文件，并未实际安装相关组件。
          <br />详细使用教程请参考 http://mozilla.github.io/pdf.js/getting_started/
        </slot>
      </el-alert>
    </el-row>
    <el-row>
      <el-scrollbar>
        <div style="height: 100%;">
          <div v-for="item in totals" :id="`page-${item}`" :key="item" class="pdf-box">
            <canvas :id="'canvas-pdf-' + item" class="canvas-pdf"></canvas>
          </div>
        </div>
      </el-scrollbar>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl: "../../../static/readme.pdf",
      scale: 1.5,
      totals: [],
      pageNum: 1,
      viewHeight: 0
    };
  },
  mounted() {
    this.renderPdf(this.scale);
  },
  methods: {
    renderPdf(scale) {
      var pdfjsLib = window["pdfjs-dist/build/pdf"];
      var TextLayerBuilder = window["pdfjs-dist/web/pdf_viewer"];
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "//mozilla.github.io/pdf.js/build/pdf.worker.js";

      // Asynchronous download of PDF
      var loadingTask = pdfjsLib.getDocument(this.pdfUrl);
      // 当 PDF 地址为跨域时，pdf 应该已流的形式传输，否则会出现pdf损坏无法展示
      loadingTask.promise.then(pdf => {
        // 得到PDF的总的页数
        let totalPage = pdf.numPages;
        let idName = "canvas-pdf-";
        // 根据总的页数创建相同数量的canvas
        this.createCanvas(totalPage, idName);
        for (let i = 1; i <= totalPage; i++) {
          pdf.getPage(i).then(page => {
            let pageDiv = document.getElementById(`page-${i}`);
            let viewport = page.getViewport({ scale: scale });
            let canvas = document.getElementById(idName + i);
            let context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            this.viewHeight = viewport.height;
            let renderContext = {
              canvasContext: context,
              viewport
            };
            var renderTask = page.render(renderContext);
            // 如果你只是展示pdf而不需要复制pdf内容功能，则可以这样写render
            renderTask.promise.then(() => {
              return page.getTextContent();
            });
            // 如果你需要复制则像下面那样写利用text-layer
            // renderTask.promise
            //   .then(() => {
            //     return page.getTextContent();
            //   })
            //   .then(textContent => {
            //     // 创建文本图层div
            //     const textLayerDiv = document.createElement("div");
            //     textLayerDiv.setAttribute("class", "textLayer");
            //     // 将文本图层div添加至每页pdf的div中
            //     pageDiv.appendChild(textLayerDiv);
            //     // 创建新的TextLayerBuilder实例
            //     let textLayer = new TextLayerBuilder({
            //       textLayerDiv: textLayerDiv,
            //       pageIndex: page.pageIndex,
            //       viewport: viewport
            //     });
            //     textLayer.setTextContent(textContent);
            //     textLayer.render();
            //   });
          });
        }
      });
    },
    createCanvas(totalPages) {
      for (let i = 1; i <= totalPages; i++) {
        this.totals.push(i);
      }
    },
    // 分页
    scrollfun(e) {
      let scrollTop = e.target.scrollTop;
      if (scrollTop === 0) {
        this.pageNum = 1;
      } else {
        this.pageNum = Math.ceil(scrollTop / this.viewHeight);
      }
    }
  }
};
</script>

<style scoped lang="scss">
</style>