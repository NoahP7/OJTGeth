const myFirstContract = artifacts.require("myFirstContract");
module.exports = function (deployer) {
  deployer.deploy(myFirstContract);
};