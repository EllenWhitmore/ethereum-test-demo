import { transStrToObj } from './utils';

const log = console.log.bind(console, '=====window.TronLinkEVM CONSOLE=====');
function $id(id) {
  return document.getElementById(id);
}

// event start
window.onload = () => {
  console.log(
    "=====window.ethereum CONSOLE=====window.onload",
    window.TronLinkEVM
  );
  window.TronLinkEVM.on("connect", (...args) => {
    log("ethereumProviderEvent - connect", ...args);
    $id('current-chain-id').innerHTML = args[0].chainId
  });

  window.TronLinkEVM.on("disconnect", (...args) => {
    log("ethereumProviderEvent - disconnect", ...args);
  });

  window.TronLinkEVM.on("chainChanged", (...args) => {
    log("ethereumProviderEvent - chainChanged", ...args);
    $id('current-chain-id').innerHTML = args[0].chainId
  });

  window.TronLinkEVM.on("accountsChanged", (...args) => {
    log("ethereumProviderEvent - accountsChanged", ...args);
  });
};
// event end

// eth_requestAccounts start
$id("get-account-info").addEventListener("click", async () => {
  try {
    const res = await TronLinkEVM.request({ method: "eth_requestAccounts" });
    if (Array.isArray(res) && typeof res[0] === "string") {
      log("eth_requestAccounts success", res);
      $id('account-info').innerHTML = res[0];
      $id('console-content').innerHTML = res;
    }
  } catch (error) {
    log("eth_requestAccounts fail", error);
    $id('console-content').innerHTML = error.toString() === '[object Object]' ? JSON.stringify(error) : error;
  }
});

$id('disconnect-account-info').addEventListener("click", () => {
  $id('account-info').innerHTML = 'User Address';
})
// eth_requestAccounts end

// wallet_switchEthereumChain start
$id('switch-chain-btn').addEventListener("click", async () => {
  const chainId = $id('switch-chain-id-input').value;
  try {
    const res = await TronLinkEVM.request({ method: "wallet_switchEthereumChain", params: [{chainId: chainId}] });
    if (!res) {
      log("wallet_switchEthereumChain success", res);
      $id('console-content').innerHTML = res;
    }
  } catch (error) {
    log("wallet_switchEthereumChain fail", error);
    $id('console-content').innerHTML = error.toString() === '[object Object]' ? JSON.stringify(error) : error;
  }
})
// wallet_switchEthereumChain end

// eth_sendTransaction start
$id('sign-transaction-btn').addEventListener("click", async () => {
  try {
    const inputValue = $id('sign-transaction-tx').value;
    const inputObj = transStrToObj(inputValue);
    log('inputObj', inputObj);
    // const res = await TronLinkEVM.request({ method: "eth_sendTransaction", params: [inputObj] });
    // if (res) {
    //   log("eth_sendTransaction success", res);
    //   $id('console-content').innerHTML = res;
    // }
  } catch (error) {
    console.error("eth_sendTransaction fail", error);
    $id('console-content').innerHTML = error.toString() === '[object Object]' ? JSON.stringify(error) : error;
  }
})
// eth_sendTransaction end


export default null;
