module.exports = { Block, Blockchain };

const { Block, Blockchain } = require("./your-blockchain-file.js");

const JeChain = new Blockchain();
// Add a new block
JeChain.addBlock(new Block(Date.now().toString(), { from: "John", to: "Bob", amount: 100 }));
// (This is just a fun example, real cryptocurrencies often have some more steps to implement).

// Prints out the updated chain
console.log(JeChain.chain); 