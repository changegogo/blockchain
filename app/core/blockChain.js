const { generateGenesisBlock, generateNewBlock } = require('../core/block');

// 区块链结构体
function BlockChain() {
    this.blocks = [];
}

BlockChain.prototype.print = function() {
    console.log(this.blocks);
}

var isValid = function isValid(newBlock, oldBlock) {
    if(newBlock.index - 1 != oldBlock.index){
        return false;
    }
    if(newBlock.preBlockHash != oldBlock.hash){
        return false;
    }
    if(newBlock.calculateHash() != newBlock.hash ){
        return false;
    }
    return true;
}

BlockChain.prototype.sendData = function(data) {
    let preBlock = this.blocks[this.blocks.length - 1];
    let newBlock = generateNewBlock(preBlock, data);
    this.appendBlock(newBlock);
}

BlockChain.prototype.appendBlock = function(newBlock) {
    if(this.blocks.length === 0){
        this.blocks.push(newBlock);
        return;
    }
    if(isValid(newBlock, this.blocks[this.blocks.length - 1])){
        this.blocks.push(newBlock);
    }else {
        console.log('invalid block');
    }
}

var newBlockChain = function() {
    let genesisBlock = generateGenesisBlock();
    let blockChain = new BlockChain();
    blockChain.appendBlock(genesisBlock);
    return blockChain;
}

module.exports = {
    blockChain: newBlockChain()
}

