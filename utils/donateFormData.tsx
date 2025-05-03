export enum PopUpTypes {
    DonatePage,
    Mint,
    CreditCard,
    WalletConnect,
    WalletToWallet,
    Nft,
    DirectWallet,
    MetaMask,
    TrustWallet
}

export const donateCardData = {
    creditCard: {
        title: `SENDING DONATION`,
        donateOptions: [
            // {
            //     title: `Credit Card`
            // },
            {
                title: `Wallet to wallet transfer`
            },
            {
                title: `Direct wallet transfer`
            }
        ],
        //walletOption: `Mastercard / Visa / Amex Any crypto wallet`,
        walletOption: `Any crypto wallet`,
        type: PopUpTypes.DonatePage,
    },
    Mint: {
        title: `MINTING NFT's`,
        donateOptions: [
            {
                title: `Mint as many NFT's as you wish.`
            },
            {
                title: `Price is 0.1 BNB per NFT.`
            },
            {
                title: ``
            }
        ],
        walletOption: `Metamask / Trust Wallet`,
        type: PopUpTypes.Mint,
    }
}

export const paymentMethodData = {
    subTitle: `take care of forests`,
    title: `Donate`,
    paymentMethod: [
        // {
        //     paymentTitle: `Credit Card`,
        //     src: `/common/masterCardSvg.svg`,
        //     walletOption: `MasterCard / Visa / Amex`,
        //     donateMethod: `creditCard`,
        //     type: PopUpTypes.CreditCard
        // },
        {
            paymentTitle: `Connect with Wallet`,
            src: `/common/walletSvg.svg`,
            walletOption: `Metamask / Trust Wallet`,
            donateMethod: `wallet`,
            type: PopUpTypes.WalletConnect
        },
        {
            paymentTitle: `Wallet to wallet transfer`,
            src: `/common/walletSvg.svg`,
            walletOption: `Any crypto wallet`,
            donateMethod: `W2W`,
            type: PopUpTypes.WalletToWallet
        },
    ]
}

export const mintDonateData = {
    subTitle: `donate by`,
    title: `Minting NFT's`,
    connectWith: [
        {
            src: `/common/metamaskSvg.svg`,
            type: PopUpTypes.MetaMask
        },
        {
            src: `/common/binanceSVG.svg`,
            type: PopUpTypes.TrustWallet
        },
        
    ]
}

export const connectWalletData = {
    subTitle: `donate by`,
    title: `Connect wallet`,
    connectWith: [
        {
            src: `/common/metamaskSvg.svg`,
            type: PopUpTypes.DirectWallet
        },
        {
            src: `/common/binanceSVG.svg`,
            type: PopUpTypes.DirectWallet

        },
    ]
}

export const coinPaymentData = [
    {
        src: `/common/busdCoin.svg`,
        title: `BUSD`,
        coinInfo: 
            {
                id: 1,
                description: `To make a donation, send the desired amount of BUSD to the
                    address below or scan the QR code.`,
                qrImage: `/common/qrBusd.svg`,
                adress: `6f7b2412e1a78fa9kg6466134fd640kl46`,
                disclaimerTitle: `Send only BUSD  to this deposit address`,
                disclaimerDescription: `Sending coin or token other than BUSD to this address may result in the loss 
                    of your deposit.`
            }
    },
    {
        src: `/common/ethCoin.svg`,
        title: `ETH`,
        coinInfo: 
            {
                id: 2,
                description: `To make a donation, send the desired amount of ETH to the
                    address below or scan the QR code.`,
                qrImage: `/common/qrBusd.svg`,
                adress: `6f7b2412e1a78fa9kg6466134fd640kl46`,
                disclaimerTitle: `Send only ETH  to this deposit address`,
                disclaimerDescription: `Sending coin or token other than ETH to this address may result in the loss 
                    of your deposit.`
            }
        
    },
    {
        src: `/common/usdcCoin.svg`,
        title: `USDC`,
        coinInfo: 
            {
                id: 3,
                description: `To make a donation, send the desired amount of USDC to the
                    address below or scan the QR code.`,
                qrImage: `/common/qrBusd.svg`,
                adress: `6f7b2412e1a78fa9kg6466134fd640kl46`,
                disclaimerTitle: `Send only USDC  to this deposit address`,
                disclaimerDescription: `Sending coin or token other than USDC to this address may result in the loss 
                    of your deposit.`
            }
        
    },
    {
        src: `/common/usdtCoin.svg`,
        title: `USDT`,
        coinInfo: 
            {
                id: 4,
                description: `To make a donation, send the desired amount of USDT to the
                    address below or scan the QR code.`,
                qrImage: `/common/qrBusd.svg`,
                adress: `6f7b2412e1a78fa9kg6466134fd640kl46`,
                disclaimerTitle: `Send only USDT  to this deposit address`,
                disclaimerDescription: `Sending coin or token other than USDT to this address may result in the loss 
                    of your deposit.`
            }
        
    },
]