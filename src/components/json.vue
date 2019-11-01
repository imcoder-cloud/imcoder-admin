<template>
  <el-scrollbar>
    <div class="json-show" v-html="jsonHtml"></div>
  </el-scrollbar>
</template>

<script>
export default {
  props: {
    text: {
      default: ""
    },
    value: {
      default: ""
    }
  },
  data() {
    return {
      jsonHtml: ""
    };
  },
  watch: {
    value: function() {
      this.process(this.value);
    }
  },
  mounted() {
    this.process(this.value);
  },
  methods: {
    //格式化代码函数,已经用原生方式写好了不需要改动,直接引用就好
    formatJson(json, options) {
      var reg = null,
        formatted = "",
        pad = 0,
        PADDING = "    ";
      options = options || {};
      options.newlineAfterColonIfBeforeBraceOrBracket =
        options.newlineAfterColonIfBeforeBraceOrBracket === true ? true : false;
      options.spaceAfterColon =
        options.spaceAfterColon === false ? false : true;
      if (typeof json !== "string") {
        json = JSON.stringify(json);
      } else {
        json = JSON.parse(json);
        json = JSON.stringify(json);
      }
      reg = /([\{\}])/g;
      json = json.replace(reg, "\r\n$1\r\n");
      reg = /([\[\]])/g;
      json = json.replace(reg, "\r\n$1\r\n");
      reg = /(\,)/g;
      json = json.replace(reg, "$1\r\n");
      reg = /(\r\n\r\n)/g;
      json = json.replace(reg, "\r\n");
      reg = /\r\n\,/g;
      json = json.replace(reg, ",");
      if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
        reg = /\:\r\n\{/g;
        json = json.replace(reg, ":{");
        reg = /\:\r\n\[/g;
        json = json.replace(reg, ":[");
      }
      if (options.spaceAfterColon) {
        reg = /\:/g;
        json = json.replace(reg, ":");
      }
      json.split("\r\n").forEach(function(node, index) {
        //console.log(node);
        var i = 0,
          indent = 0,
          padding = "";

        if (node.match(/\{$/) || node.match(/\[$/)) {
          indent = 1;
        } else if (node.match(/\}/) || node.match(/\]/)) {
          if (pad !== 0) {
            pad -= 1;
          }
        } else {
          indent = 0;
        }

        for (i = 0; i < pad; i++) {
          padding += PADDING;
        }

        formatted += padding + node + "\r\n";
        pad += indent;
      });
      return formatted;
    },
    //着色
    isArray(obj) {
      return (
        obj &&
        typeof obj === "object" &&
        typeof obj.length === "number" &&
        !obj.propertyIsEnumerable("length")
      );
    },
    process(text) {
      var html = "";
      try {
        if (text == "") {
          text = '""';
        }
        var obj = eval("[" + text + "]");
        html = this.processObject(obj[0], 0, false, false, false);
        this.jsonHtml = html;
      } catch (e) {
        throw e;
      }
    },
    processObject(obj, indent, addComma, isArray, isPropertyContent) {
      var html = "";
      var comma = addComma ? "<span class='comma'>,</span> " : "";
      var type = typeof obj;
      if (this.isArray(obj)) {
        if (obj.length == 0) {
          html += this.getRow(
            indent,
            "<span class='array-brace'>[ ]</span>" + comma,
            isPropertyContent
          );
        } else {
          html += this.getRow(
            indent,
            "<span class='array-brace'>[</span>",
            isPropertyContent
          );
          for (var i = 0; i < obj.length; i++) {
            html += this.processObject(
              obj[i],
              indent + 1,
              i < obj.length - 1,
              true,
              false
            );
          }
          html += this.getRow(
            indent,
            "<span class='array-brace'>]</span>" + comma
          );
        }
      } else {
        if (type == "object" && obj == null) {
          html += this.formatLiteral(
            "null",
            "",
            comma,
            indent,
            isArray,
            "null"
          );
        } else {
          if (type == "object") {
            var numProps = 0;
            for (var prop in obj) {
              numProps++;
            }
            if (numProps == 0) {
              html += this.getRow(
                indent,
                "<span class='object-brace'>{ }</span>" + comma,
                isPropertyContent
              );
            } else {
              html += this.getRow(
                indent,
                "<span class='object-brace'>{</span>",
                isPropertyContent
              );
              var j = 0;
              for (var prop in obj) {
                html += this.getRow(
                  indent + 1,
                  '<span class="property-name">"' +
                    prop +
                    '"</span>: ' +
                    this.processObject(
                      obj[prop],
                      indent + 1,
                      ++j < numProps,
                      false,
                      true
                    )
                );
              }
              html += this.getRow(
                indent,
                "<span class='object-brace'>}</span>" + comma
              );
            }
          } else {
            if (type == "number") {
              html += this.formatLiteral(
                obj,
                "",
                comma,
                indent,
                isArray,
                "number"
              );
            } else {
              if (type == "boolean") {
                html += this.formatLiteral(
                  obj,
                  "",
                  comma,
                  indent,
                  isArray,
                  "boolean"
                );
              } else {
                if (type == "function") {
                  obj = this.formatFunction(indent, obj);
                  html += this.formatLiteral(
                    obj,
                    "",
                    comma,
                    indent,
                    isArray,
                    "function"
                  );
                } else {
                  if (type == "undefined") {
                    html += this.formatLiteral(
                      "undefined",
                      "",
                      comma,
                      indent,
                      isArray,
                      "null"
                    );
                  } else {
                    html += this.formatLiteral(
                      obj,
                      '"',
                      comma,
                      indent,
                      isArray,
                      "string"
                    );
                  }
                }
              }
            }
          }
        }
      }
      return html;
    },
    formatLiteral(literal, quote, comma, indent, isArray, style) {
      if (typeof literal == "string") {
        literal = literal
          .split("<")
          .join("&lt;")
          .split(">")
          .join("&gt;");
      }
      var str =
        "<span class='" +
        style +
        "'>" +
        quote +
        literal +
        quote +
        comma +
        "</span>";
      if (isArray) {
        str = this.getRow(indent, str);
      }
      return str;
    },
    formatFunction(indent, obj) {
      var tabs = "";
      for (var i = 0; i < indent; i++) {
        tabs += "    ";
      }
      var funcStrArray = obj.toString().split("\n");
      var str = "";
      for (var i = 0; i < funcStrArray.length; i++) {
        str += (i == 0 ? "" : tabs) + funcStrArray[i] + "\n";
      }
      return str;
    },
    getRow(indent, data, isPropertyContent) {
      var tabs = "";
      for (var i = 0; i < indent && !isPropertyContent; i++) {
        tabs += "    ";
      }
      if (
        data != null &&
        data.length > 0 &&
        data.charAt(data.length - 1) != "\n"
      ) {
        data = data + "\n";
      }
      return tabs + data;
    }
  }
};
</script>

<style lang="scss">
.json-show {
  white-space: pre-wrap;
  height: 400px;
  pre {
    font-family: "consolas";
  }
  .object-brace {
    color: #3b3b3b;
  }
  .array-brace {
    color: #3b3b3b;
  }
  .property-name {
    color: #d61818;
  }
  .string {
    color: #0e7bd8;
  }
  .number {
    color: #aa00aa;
  }
  .boolean {
    color: #0000ff;
  }
  .function {
    color: #aa6633;
  }
  .null {
    color: #0000ff;
  }
  .comma {
    color: #000000;
  }
  pre.code-container {
    margin-top: 0px;
    margin-bottom: 0px;
  }
}
</style>