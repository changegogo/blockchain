const Controller = require('egg').Controller;
const { blockChain } = require('../core/blockChain');
class HomeController extends Controller {
  async index() {
    this.ctx.body = 'Hello world!';
  }
  
  async sendData() {
    let ctx = this.ctx;
    let { data } = ctx.query;
    if(!data){
      ctx.body = 'no data';
      return;
    }
    blockChain.sendData(data);
    ctx.body = blockChain.blocks;
  }

  async chain() {
    let ctx = this.ctx;
    ctx.body = blockChain.blocks;
  }
}

module.exports = HomeController;
