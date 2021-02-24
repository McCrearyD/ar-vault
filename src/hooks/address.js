import Arweave from 'arweave';
import React from 'react'

const client = new Arweave({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });

export function trimAddress(addr) {
  if (addr.length <= 0) {
    return addr
  }

  return addr.slice(0, 5) + '...' + addr.slice(-5)
}

export function useAddress() {
    const [address, setAddress] = React.useState('');
    React.useEffect(() => {
      addEventListener("arweaveWalletLoaded", async () => {
        const addr = await client.wallets.getAddress();
        setAddress(addr);
      });
    }, []);
  
    return address
}

export function useHasAddress() {
  return useAddress().length > 0
}