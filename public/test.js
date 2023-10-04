import GET_ACTIVE_ITEMS from "../constants/subgraphQueries"
import { useQuery } from "@apollo/client"


const {data: listedNfts } = useQuery(GET_ACTIVE_ITEMS)

// console.log(listedNfts);

// document.body.textContent = "";

let header = document.createElement('h1');
header.textContent = "This page has been eaten";
document.body.appendChild(header);
