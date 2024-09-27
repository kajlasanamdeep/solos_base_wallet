import { getContract, toTokens } from 'thirdweb';
import { defaultChain, ThirdwebClient } from '../config';
import { useActiveAccount, useReadContract, useWalletBalance } from 'thirdweb/react';
export const useCustomTokenBalance = ({ tokenAddress }) => {
    const activeAccount = useActiveAccount();
    const { data, isLoading, refetch:refetchBalance, isRefetching } = useWalletBalance({
        chain: defaultChain,
        address: activeAccount?.address,
        client: ThirdwebClient,
        tokenAddress: tokenAddress,
    });
    const contract = getContract({
        chain: defaultChain,
        client: ThirdwebClient,
        address: tokenAddress,
    });
    const { data: price, isLoading: isLoadingPrice, refetch: refetchPrice, isRefetching:isRefetchingPrice } = useReadContract({
        method: "function getPrice() external view returns (uint256)",
        contract
    });
    function refetch() {
        refetchPrice();
        refetchBalance();
    }
    return { balance: data, price: price && data ? toTokens(price, data?.decimals) : 0, isLoading: isLoading || isLoadingPrice || isRefetchingPrice || isRefetching, refetch }
};
