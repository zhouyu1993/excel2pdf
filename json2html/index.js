var fs = require('fs')
var path = require('path')
var http = require('http')

var handlebars = require('handlebars')

var config = {
  port: 9876,
  template: 'default',
}

var data = {
  name: '老师',
  data: {
    'name': '点名册正面',
    'data': [
      [
        '课程名称：快乐童声4'
      ],
      [
        '温馨提示：                                                                   '
      ],
      [
        null,
        '1.起始课提前10分钟进教室，衔接课提前5分钟进教室、不早退、不拖堂；',
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
        '教师姓名：陈继芸'
      ],
      [
        null,
        '2.着专业规定服装；',
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
        '课程时段：周二19:00-20:30'
      ],
      [
        null,
        '3.日常教务请使用呼叫器。                                                            ',
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
        '授课教室：2B'
      ],
      [
        null,
        '所在中心：万达金街     电话：86368275/86368295         ',
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
        '课间休息时间:(5分钟)'
      ],
      [
        '序号',
        '小名',
        '学员姓名',
        '性别',
        '出生年月',
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
        '已报学科及备注'
      ],
      [
        null,
        null,
        null,
        null,
        null,
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日',
        '月   日'
      ],
      [
        1,
        null,
        '徐国祯',
        '男',
        '2014/8/21'
      ]
    ]
  }
}

var templateDirectory = path.join(__dirname, 'templates')

function templateExists (templateName) {
  return fs.existsSync(`${templateDirectory}/${templateName}`)
}

function getTemplate (templateName, filename) {
  return fs.readFileSync(`${templateDirectory}/${templateName}/${filename}`, 'utf8')
}

if (data) {
  var promise = new Promise((resolve, reject) => {
    var templateName = config.template

    if (!templateExists(templateName)) {
      reject(`Template (${templateName}) does not exist.`)
    }

    var htmlSource = getTemplate(templateName, 'index.html')
    var template = handlebars.compile(htmlSource)
    var html = template(data)

    // 创建服务器
    var server = http.createServer(function(request, response) {
      response.setHeader('Access-Control-Allow-Origin', '*')
      response.writeHead(200, {
        'Content-type': 'text/html'
      })
      response.end(html)
    })

    // 服务器监听
    server.listen(config.port, () => {
      console.log(`Server is running at http://127.0.0.1:${config.port}`)
    })

    return resolve()
  })

  promise.then(() => {
    console.log('ok')
  }).catch(err => {
    console.log('err:', err)
  })
}
