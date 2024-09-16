import { getContract, toTokens } from 'thirdweb';
import { RED_ADDRESS, ThirdwebClient, USDC_ADDRESS } from '../client';
import { useReadContract, useWalletBalance } from 'thirdweb/react';

export const useRedPrice = ({ chain }) => {
    const contract = getContract({
        chain,
        client: ThirdwebClient,
        address: RED_ADDRESS[chain?.id],
    });
    const { data, isLoading } = useReadContract({
        method: "function getPrice() external view returns (uint256)",
        contract
    });

    return { redPrice: data && toTokens(data, 18), redPriceLoading: isLoading }
}

export const useNativeBalance = ({ chain, address }) => {
    const { data, isLoading } = useWalletBalance({
        chain,
        address,
        client: ThirdwebClient,
    });

    return { nativeBalance: data, isLoading }
}

export const useRedBalance = ({ chain, address }) => {
    const { data, isLoading } = useWalletBalance({
        chain,
        address,
        client: ThirdwebClient,
        tokenAddress: RED_ADDRESS[chain?.id],
    });

    return { redBalance: data, redBalanceLoading: isLoading }
};
export const useUsdcBalance = ({ chain, address }) => {
    const { data, isLoading } = useWalletBalance({
        chain,
        address,
        client: ThirdwebClient,
        tokenAddress: USDC_ADDRESS[chain?.id],
    });

    return { usdcBalance: data, usdcBalanceLoading: isLoading }
};
