var puppeteer = require('puppeteer')

const config = {
  port: 9876
}

var html2pdf = async () => {
  var browser = await puppeteer.launch()

  const page = await browser.newPage()

  await page.goto(`http://127.0.0.1:${config.port}`, {
    waitUntil: 'networkidle0'
  })

  await page.waitFor(500)

  await page.pdf({
    path: `./html2pdf/test.pdf`,
    format: 'A4',
    margin: {
      top: '20px',
      right: '10px',
      bottom: '20px',
      left: '10px'
    }
  })

  await browser.close()

  console.log('saved')
}

html2pdf()
