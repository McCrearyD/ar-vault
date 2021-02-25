import { arweaveClient } from "../hooks/address";

const JWK_KEY = 'jwk'
const ADDRESS_KEY = 'address'

async function parseJwk(jwk) {
  const jsonJwk = JSON.parse(jwk)
  let address = await arweaveClient.wallets.jwkToAddress(jsonJwk);
  return {
    'jwk': jsonJwk,
    'address': address
  }
}

export async function storeKey(jwk) {
  const data = await parseJwk(jwk)
  localStorage.setItem(JWK_KEY, data.jwk)
  localStorage.setItem(ADDRESS_KEY, data.address)
}

export function getAddress() {
  return localStorage.getItem(ADDRESS_KEY)
}

export function getJwk() {
  return localStorage.getItem(JWK_KEY)
}