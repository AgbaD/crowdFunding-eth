import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const stateContextProvider = ({ children }) => {
    const { contract } = useContract('0xC0862674C9cb86a9fC2cA244EfDCE58C256B62Bb');
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign')

}
