import Arweave from 'arweave';
import React from 'react'

const client = new Arweave({
    host: "arweave.net",
    port: 443,
    protocol: "https",
  });

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