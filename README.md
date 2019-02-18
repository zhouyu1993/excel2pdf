# excel2pdf

https://online2pdf.com/excel2pdf

# js

[node-xlsx](https://github.com/mgcrea/node-xlsx)

  * xlsx_to_json

[js-xlsx](https://github.com/SheetJS/js-xlsx)

  * xlsx_to_json
  * xlsx_to_csv
  * xlsx_to_txt
  * xlsx_to_html
  * xlsx_to_formulae

[puppeteer](https://github.com/GoogleChrome/puppeteer)

  * `page.pdf` html_to_pdf

[jsPDF](https://github.com/MrRio/jsPDF)

  * canvas_to_pdf

### 思考

excel -> json -> html -> pdf

json 数据是这样的：

``` json
[
  [
    "课程名称：快乐童声4"
  ],
  [
    "温馨提示：                                                                   "
  ],
  [
    null,
    "1.起始课提前10分钟进教室，衔接课提前5分钟进教室、不早退、不拖堂；",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "教师姓名：陈继芸"
  ],
  [
    null,
    "2.着专业规定服装；",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "课程时段：周二19:00-20:30"
  ],
  [
    null,
    "3.日常教务请使用呼叫器。                                                            ",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "授课教室：2B"
  ],
  [
    null,
    "所在中心：万达金街     电话：86368275/86368295         ",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    "课间休息时间:(5分钟)"
  ],
  [
    "序号",
    "小名",
    "学员姓名",
    "性别",
    "出生年月",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    "已报学科及备注"
  ],
  [
    null,
    null,
    null,
    null,
    null,
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日",
    "月   日"
  ],
  [
    1,
    null,
    "徐国祯",
    "男",
    "2014/8/21"
  ]
]
```

难点落在了 json -> html 怎么合并单元格。。。

# Numbers 软件支持将 excel 转为 pdf

但是只能打开一个转一个
