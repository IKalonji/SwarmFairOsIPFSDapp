const main = async () => {
    const storageContractFactory = await hre.ethers.getContractFactory('MyStorageFileSystem');
    const storageContract = await storageContractFactory.deploy();
    await storageContract.deployed();
  
    console.log("Contract deployed to:", storageContract.address);
  
   
    let txn = await storageContract.uploadFile("NewFile", "29/05/2022", "pdf", "https://ipfs.io/ipfs/df54g6g45496edg4d632vfb16574ed987fgb");
    await txn.wait();
    console.log(txn);

  }
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();