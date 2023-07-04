const log = console.log.bind(console, "=====window.TronLinkEVM CONSOLE=====");

// const provider = window.ethereum;
const provider = window.TronLinkEVM;
log("window.onload", provider);
window.onload = () => {
  console.log(
    "=====window.ethereum CONSOLE=====window.onload",
    provider
  );
  provider.on("connect", (...args) => {
    log("ethereumProviderEvent - connect", ...args);
  });

  provider.on("disconnect", (...args) => {
    log("ethereumProviderEvent - disconnect", ...args);
  });

  provider.on("chainChanged", (...args) => {
    log("ethereumProviderEvent - chainChanged", ...args);
  });

  provider.on("accountsChanged", (...args) => {
    log("ethereumProviderEvent - accountsChanged", ...args);
  });
};

export default provider;
