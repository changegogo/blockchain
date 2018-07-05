const crypto = require('crypto');

// 区块结构体
function Block(index, preBlockHash, data) {
    this.index = index;
    this.preBlockHash = preBlockHash;
    this.timeStamp = Date.now() + '';
    this.data = data;
    this.hash = this.calculateHash();
}
// 计算区块的哈希值
Block.prototype.calculateHash = function calculateHash() {
    let blockDate = this.index + this.timeStamp + this.preBlockHash + this.data;
    let sha = crypto.createHash('sha256');
    sha.update(blockDate);
    return sha.digest('hex');
}
// 生成新区块
var generateNewBlock = function generateNewBlock(preBlock, data){
    let index = preBlock.index + 1;
    let preBlockHash = preBlock.hash;
    let newBlock = new Block(index, preBlockHash, data);
    return newBlock;
}
// 生成创世区块
var generateGenesisBlock = function generateGenesisBlock() {
    let preBlock = new Block(-1, '', '');
    preBlock.hash = '';
    return generateNewBlock(preBlock, 'Genesis Block');
}

module.exports = {
    generateGenesisBlock,
    generateNewBlock
}