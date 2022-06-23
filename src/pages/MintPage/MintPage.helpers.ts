import { ethers, providers } from 'ethers';

export type Web3Provider = providers.Web3Provider;

export const getAddresses = async (provider?: Web3Provider) => {
  try {
    const accounts = await provider?.listAccounts();

    return accounts;
  } catch (error) {
    console.error(error);
  }
};

export const getMetamask = () => {
  try {
    if (!window.ethereum) {
      throw new Error('No crypto wallet found!');
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    return provider;
  } catch (error) {
    console.error(error);
  }
};

export const ellipsisAccount = (account: string) => {
  if (!account) return '';

  return `${account.slice(0, 5)}...${account.slice(account.length - 4)}`;
};
