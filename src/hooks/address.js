import Arweave from 'arweave';
import React from 'react';
import { getAddress } from '../stores/keyFileStore';


const preferredLogin = 'local' // 'local' | 'arconnect'

export const arweaveClient = new Arweave({host: "arweave.net", port: 443, protocol: "https"});

export function trimAddress(addr) {
  if (addr.length <= 0) {
    return addr
  }

  return addr.slice(0, 5) + '...' + addr.slice(-5)
}

function useAddressArConnect(eventListenerCallback, deps) {
  if (eventListenerCallback || deps) {
    throw Error('not implemented')
  }

  const [address, setAddress] = React.useState('');
  const rDeps = deps
    ? [
      eventListenerCallback, ...deps
    ]
    : [eventListenerCallback]

  React.useEffect(() => {
    addEventListener("arweaveWalletLoaded", async() => {
      const addr = await arweaveClient
        .wallets
        .getAddress();
      setAddress(addr);
      if (eventListenerCallback) {
        eventListenerCallback(addr)
      }
    });
  }, rDeps);

  return address
}

export function useAddress() {

  let order = [];
  switch (preferredLogin) {
    case 'local':
      order = [getAddress, useAddressArConnect]
      break
    case 'arconnect':
      order = [useAddressArConnect, getAddress]
      break
    default:
      throw Error(`preferred login invalid. got ${preferredLogin}`)
  }

  let address = ''
  order.some(useAddressFunc => {
    address = useAddressFunc()
    return address.length > 0
  })

  return address
}

export function useHasAddress() {
  return useAddress().length > 0
}