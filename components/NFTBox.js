import { useState, useEffect } from "react"
import { useWeb3Contract, useMoralis } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import nftAbi from "../constants/BasicNft.json"
import Image from "next/image"
import { Card, useNotification } from "web3uikit"
import { ethers } from "ethers"
import UpdateListingModal from "./UpdateListingModal"
import { getActiveTabURL } from "../public/inject.js";


var finalUrl = "nodomain"

export async function getURL(xxx) {
    finalUrl = await getActiveTabURL()
    if(finalUrl.includes(xxx)){
        return true
    }else {
        return false   
    }
}

export function NFTBox({ domain, status, filter, nftAddress, tokenId}) {
    const { isWeb3Enabled, account } = useMoralis()
    const [imageURI, setImageURI] = useState("")
    const [Issuant, setIssuant] = useState("")

    const [imageURI1, setImageURI1] = useState("")
    const [Issuant1, setIssuant1] = useState("")

    const [domainURI, setDomainURI] = useState("")
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => setShowModal(false)

        

    // const { runContractFunction: getImageURL } = useWeb3Contract({
    //     abi: nftAbi,
    //     contractAddress: nftAddress,
    //     functionName: "getImageURL",
    //     params: {},
    // })


    async function updateUI() {
        // const provider = new ethers.providers.JsonRpcProvider("https://goerli.infura.io/v3/66cf4fc2b84a443cbeb9821f7fdc588b")
        // const nftContract = new ethers.Contract(nftAddress, nftAbi, provider)
        // const imageURI = await nftContract.getImageURL()
        // setImageURI(imageURI)

        // const Issuant = await nftContract.getIssuant()
        // setIssuant(Issuant)

        const domainURI = await getURL(domain)
        setDomainURI(domainURI)

        /*Goerli is down maual replacement*/
        const imageURI = 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Chainlink_Logo.png'
        setImageURI(imageURI)

        const Issuant = 'Chainlink'
        setIssuant(Issuant)

        const imageURI1 = 'https://cryptologos.cc/logos/aave-aave-logo.png?v=025'
        setImageURI1(imageURI1)

        const Issuant1 = 'AAVE'
        setIssuant1(Issuant1)


    }
    updateUI()


    const handleCardClick = () => {
            setShowModal(true)
    }

    const tokenDomain = "https://goerli.etherscan.io/address/" + nftAddress 


    return (
        <div>
            <div>
                {domainURI ? (
                    <div>
                        <UpdateListingModal
                            isVisible={showModal}
                            tokenId={tokenId}
                            nftAddress={nftAddress}
                            onClose={hideModal}
                        />
                        <Card
                            onClick={handleCardClick}
                        >
                            <div className="p-2">
                                <div className="flex flex-row items-center gap-2 w-64">
                                    <div className="italic text-sm">
                                        Partnered with <a href={tokenDomain}>{Issuant}</a>
                                    </div>
                                    <div>#{tokenId}</div>
                                    <Image
                                        loader={() => imageURI}
                                        src={imageURI}
                                        height="100"
                                        width="100"
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card
                            onClick={handleCardClick}
                        >
                            <div className="p-2">
                                <div className="flex flex-row items-center gap-2 w-64">
                                    <div className="italic text-sm">
                                        Partnered with <a href={tokenDomain}>{Issuant1}</a>
                                    </div>
                                    <div>#{tokenId}</div>
                                    <Image
                                        loader={() => imageURI1}
                                        src={imageURI1}
                                        height="100"
                                        width="100"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                    
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    )

}


