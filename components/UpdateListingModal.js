import { Modal } from "web3uikit"
import { useState } from "react"
import { useWeb3Contract } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import { ethers } from "ethers"

export default function UpdateListingModal({
    nftAddress,
    tokenId,
    isVisible,
    onClose,
}) {

    const tokenDomain = "https://goerli.etherscan.io/address/" + nftAddress 
    const issuantDomain = "https://chain.link/"

    return (
        <Modal
            title="Details"
            isVisible={isVisible}
            onCloseButtonPressed={onClose}
            hasFooter={false}
            width="80%"
            height="80%"
        >
            <div>
            Check contract <a className="text-sky-400" href={tokenDomain}>here</a> {"\n"} {"\n"}
            and Isssuant website <a className="text-sky-400" href={issuantDomain}>here</a>
            </div>
        </Modal>
    )
}
