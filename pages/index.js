import styles from "../styles/Home.module.css"
import { useMoralisQuery, useMoralis } from "react-moralis"
import { NFTBox, getURL} from "../components/NFTBox"
import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { getActiveTabURL } from "../public/inject.js";
import { Card } from "web3uikit"
import Image from "next/image"





export default function Home() {

    const [domainURI, setDomainURI] = useState("")
    const { loading, error, data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

    var domainStack = "domainStack"
    var singleDomain = "singleDomain"
    var singleDomain2 = "singleDomain2"
    var counter = 0
    if (!loading || listedNfts){
        domainStack = el()
        singleDomain2 = domainStack.props.children.length
        console.log(singleDomain2)

        for(let i = 0; i < singleDomain2; i++) {
            
            singleDomain = domainStack.props.children[i].props.domain

            async function updateUI() {

                const domainURI = await getActiveTabURL()
                setDomainURI(domainURI)

            }
            updateUI()
            console.log(`this is domain 1 ${domainURI}`)
            if(domainURI.includes(singleDomain)){
                console.log("we on it")
                counter++
            }else {
                console.log("we not")
            }
        }   
    }
    
    console.log(counter)
    
        
    function el() { 
        return(
            <div>
                {loading || !listedNfts ? (
                    <div className="font-bold flex flex-row items-center text-xl">Loading...</div>
                ) : ( 
                    listedNfts.activeItems.map((nft) => {
                        const { domain, status, filter, nftAddress, tokenId } = nft
                        return (
                            <NFTBox
                                domain={domain}
                                nftAddress={nftAddress}
                                tokenId={tokenId}
                                status={status}
                                filter={filter}
                                key={`${nftAddress}${tokenId}`}
                            />
                        )
                    })
                )}
            </div>
        )

    }

    const imageURI = 'https://cdn-icons-png.flaticon.com/512/718/718672.png'


    return (
        <div className="container mx-auto text-center">
        <div className="flex justify-center">
            <h1 className="text-neutral-500 py-2 px-4 font-bold text-xl min-w-full MyFont my-font">Active Partnerships</h1>
        </div>
            <div className="flex flex-wrap items-center">
                {   
                    counter > 0 ? (
                        el()
                    ) : (
                    //<div className="font-bold flex flex-row items-center text-lg text-red-500 w-64"> No Active Partnerships </div>
                    <Card>
                        <div className="p-2">
                            <div className="flex flex-row items-center gap-2 w-64">
                                <div className="italic text-sm">
                                    No Active Partnerships
                                </div>
                                <Image
                                    loader={() => imageURI}
                                    src={imageURI}
                                    height="100"
                                    width="100"
                                />
                            </div>
                        </div>
                    </Card>
                    )   
                }
            </div>
        </div>
    )



        

}
