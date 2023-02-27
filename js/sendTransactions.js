const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const utils = ethers.utils;
let currentAccount = null;
let balance = null;
const connectBTN = document.querySelector("#metamask");
const getCurrentAccout = async () => {
    const accounts = await provider.send("eth_requestAccounts", []);
    currentAccount = accounts[0];
    balance = await provider.getBalance(currentAccount).then((balance) => utils.formatEther(balance));
    console.log(balance);
};
const handleChainChanged = (_chainId) => {
    window.location.reload();
};
ethereum.on("accountsChanged", getCurrentAccout);
ethereum.on("chainChanged", handleChainChanged);
getCurrentAccout();
