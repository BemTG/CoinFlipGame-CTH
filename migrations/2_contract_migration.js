const FlipContract = artifacts.require("FlipContract");

module.exports = async function(deployer) {
  await deployer.deploy(FlipContract);
  let instance = await FlipContract.deployed()
  instance.fundContract({value: 2000000000000000000})
};
