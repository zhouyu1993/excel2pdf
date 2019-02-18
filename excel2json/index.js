// 引入所需模块
var fs = require('fs')
var url = require('url')
var path = require('path')
var http = require('http')

var xlsx = require('node-xlsx')
var queryString = require('query-string')

var config = {
  port: 9876
}

// 解析当前目录
var root = path.resolve('.')

console.log('Static root dir: ' + root)

// 创建服务器
var server = http.createServer(function(request, response) {
  var requestUrl = request.url

  var urlParse = url.parse(requestUrl)
  console.log('debug', urlParse)

  var query = queryString.parse(urlParse.query) || {}
  console.log('debug', query)

  // 必须带后缀名，xlsx、xls
  var files = (query.files || '').split(',')

  var json = {
    code: 0,
    message: 'ok',
    data: []
  }

  files.forEach(function(file, index) {
    var filePath = path.join(root, file)

    try {
      var fsStat = fs.statSync(filePath)
      console.log('debug', filePath)

      // 解析 excel 文件
      var xlsx_arr = xlsx.parse(filePath)

      var fileNameArr = filePath.split('.')[0].split('/')
      fileName = fileNameArr[fileNameArr.length - 1]

      json.data.push({
        name: fileName,
        data: xlsx_arr
      })
    } catch (e) {
      console.log('error ' + filePath)

      json.data.push({
        message: filePath + ' is not found'
      })
    }
  })

  response.setHeader('Access-Control-Allow-Origin', '*')
  response.writeHead(200, {
    'Content-type': 'application/json'
  })
  response.end(JSON.stringify(json))
})

// 服务器监听
server.listen(config.port, () => {
  console.log(`Server is running at http://127.0.0.1:${config.port}`)
})

// e.g.
// http://127.0.0.1:9876/?files=excel2json/陈继芸.xls,excel2json/丁娉.xls
