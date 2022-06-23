import { useEffect, useState } from 'react';

import { ellipsisAccount, getAddresses, getMetamask } from './MintPage.helpers';
import type { Web3Provider } from './MintPage.helpers';
import * as S from './MintPage.styles';

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
        setAccountAddress(addresses[0]);
      }
    };

    provider && initialLoad(provider);
  }, [provider]);

  return (
    <S.Content>
      <S.Button
        onClick={() => {
          !isConnected && provider && connectToWallet(provider);
        }}
      >
        {isConnected && accountAddress ? ellipsisAccount(accountAddress) : 'Connect to MetaMask'}
      </S.Button>
    </S.Content>
  );
};

export default MintPage;
