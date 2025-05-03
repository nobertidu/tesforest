import { coinPaymentData, paymentMethodData, mintDonateData, connectWalletData, PopUpTypes } from "../../utils/donateFormData";
import PaymentMethod from "./ModalForms/PaymentMethod";
import MintDonate from "./ModalForms/MintDonate";
import CreditCard from "./ModalForms/CreditCard";
import WalletToWallet from "./ModalForms/WalletToWallet";
import WalletConnect from "./ModalForms/WalletConnect";
import MintNft from "./ModalForms/MintNft";
import DirectWallet from "./ModalForms/DirectWallet";


type ModalWrapperProps = {
    modal: any;
}
const ModalWrapper = ({
    modal,
}:ModalWrapperProps) => {
    if (modal.activeContenType === PopUpTypes.DonatePage) return  <PaymentMethod data={paymentMethodData} modal={modal} />
    if (modal.activeContenType === PopUpTypes.Mint) return  <MintDonate data={mintDonateData} modal={modal} />
    if (modal.activeContenType === PopUpTypes.CreditCard) return  <CreditCard modal={modal} />
    if (modal.activeContenType === PopUpTypes.WalletConnect) return  <WalletConnect data={connectWalletData} modal={modal} />
    if (modal.activeContenType === PopUpTypes.WalletToWallet) return  <WalletToWallet coinPaymentData={coinPaymentData} modal={modal} />
    if (modal.activeContenType === PopUpTypes.MetaMask) return <MintNft modal={modal} />
    if (modal.activeContenType === PopUpTypes.DirectWallet) return <DirectWallet modal={modal} />
        return <></>
}

export default ModalWrapper;