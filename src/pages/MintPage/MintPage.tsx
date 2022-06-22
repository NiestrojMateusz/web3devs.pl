import { MetamaskProvider } from 'context/Metamask.context';
import { ethers, providers } from 'ethers';
import { useEffect, useState } from 'react';

type Web3Provider = providers.Web3Provider;

const getAddresses = async (provider?: Web3Provider) => {
  try {
    const accounts = await provider?.listAccounts();

    return accounts;
  } catch (error) {
    console.error(error);
  }
};

const getMetamask = () => {
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

const ellipsisAccount = (account: string) => {
  if (!account) return '';

  return `${account.slice(0,5)}...${account.slice(account.length-4)}`
}

const MintPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState<string | undefined>(undefined);
  const provider = getMetamask();

  const connectToWallet = async (provider: Web3Provider) => {
    if (!provider) return;

    try {
      await provider.send('eth_requestAccounts', []);

      const signer = provider.getSigner();
      setIsConnected(true);
      const accountAddress = await signer.getAddress();
      setAccountAddress(accountAddress);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const initialLoad = async (provider: Web3Provider) => {
      if (!provider) return;

      const addresses = await getAddresses(provider);

      if (addresses?.length) {
        setIsConnected(true);
        setAccountAddress(addresses[0])
      }
    };

    provider && initialLoad(provider);
  }, [provider]);

  return (
    <MetamaskProvider>
      <button
        onClick={() => {
          !isConnected && provider && connectToWallet(provider);
        }}
      >
        {isConnected && accountAddress ? ellipsisAccount(accountAddress) : 'Connect to MetaMask'}
      </button>
    </MetamaskProvider>
  );
};

export default MintPage;
