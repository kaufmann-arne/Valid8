import { gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { filter: "0x0000000000000000000000000000000000000000" }) {
            domain
            status
            filter
            nftAddress
            partner
            tokenId
            id
        }
    }
`
export default GET_ACTIVE_ITEMS
