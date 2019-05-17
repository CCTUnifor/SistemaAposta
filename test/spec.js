const Application = require('spectron').Application
const assert = require('assert')
const electronPath = require('electron') // Require Electron from the binaries included in node_modules.
const path = require('path')
const $ = require('jQuery');

describe('Application launch', function () {
  this.timeout(10000)

  before(function () {
    console.log("electronpath: ", electronPath)
    this.app = new Application({
      // Your electron path can be any binary
      // i.e for OSX an example path could be '/Applications/MyApp.app/Contents/MacOS/MyApp'
      // But for the sake of the example we fetch it from our node_modules.
      path: electronPath,

      // Assuming you have the following directory structure

      //  |__ my project
      //     |__ ...
      //     |__ main.js
      //     |__ package.json
      //     |__ index.html
      //     |__ ...
      //     |__ test
      //        |__ spec.js  <- You are here! ~ Well you should be.

      // The following line tells spectron to look and use the main.js file
      // and the package.json located 1 level above.
      args: [path.join(__dirname, '../dist')],
      startTimeout: 20000
    })
    return this.app.start()
  })

  after(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.waitUntilWindowLoaded().getWindowCount().then(function (count) {
      assert.equal(count, 1)
      // Please note that getWindowCount() will return 2 if `dev tools` are opened.
      // assert.equal(count, 2)
    })
  })

  it('Ir para a tela de cadastro de Apostador', function () {
    return this.app.client
      .click("#cadastros-id")
      .click("#cadastro-apostador-id");
  })

  it("Cadastrar um Apostador", function () {
    return this.app.client
      .setValue("#nome", "Apostador Teste")
      .setValue("#cpf", "1234567897")
      .element("#salvar")
      .click();
  })

  it("Ir para a tela de cadastro de Bolão", function () {
    return this.app.client
      .click("#cadastros-id")
      .click("#cadastro-bolao-id");
  })

  it("Cadastrar um Bolão", function () {
    return this.app.client
      .setValue("#nome", "Bolão Teste")
      .click("#lookup-apostador")
      .click("#Apostador-Teste")
      .click("#salvar");
  })

  it("Ir para a tela de adicionar cota", function () {
    return this.app.client
      .click("#adicionar-cota-id");
  })

  it("Cadastrar uma nova cota", function () {
    return this.app.client
      .click("#lookup-bolao")
      .click("#Bolão-Teste")
      .click("#lookup-apostador")
      .click("#Apostador-Teste")
      .setValue("#cota-id", "20")
      .click("#salvar");
  })
})