import axios from 'axios'
import type { AxiosResponse } from 'axios'
import { getIdByNameQuery, getDataByIdQuery } from './queries'
import { SuggestedTitleResponse, GetTitleOffersResponse, GetTitleOffersFlatrateResponse } from '../common.interface'

const URL_API = 'https://apis.justwatch.com/graphql'

export async function getIdByName(name: string): Promise<{ id: string, name: string }> {
    const response: AxiosResponse<SuggestedTitleResponse> = await axios.post(URL_API, {
        operationName: "GetSuggestedTitles",
        variables: {
            country: "PY",
            language: "en",
            first: 1,
            filter: {
                searchQuery: name
            }
        },
        query: getIdByNameQuery
    })

    return {
        id: response.data.data?.popularTitles?.edges[0].node.id,
        name: response.data.data?.popularTitles?.edges[0].node.content.title,
    }
}

export async function getInfoById(id: string): Promise<GetTitleOffersFlatrateResponse[]> {
    const response: AxiosResponse<GetTitleOffersResponse> = await axios.post(URL_API, {
        operationName: "GetTitleOffers",
        variables: {
            platform: "WEB",
            nodeId: id,
            country: "PY",
            language: "en",
            filterBuy: {
                monetizationTypes: [ "BUY" ],
                bestOnly: true
            },
            filterFlatrate: {
                monetizationTypes: [
                    "FLATRATE",
                    "FLATRATE_AND_BUY",
                    "ADS",
                    "FREE"
                ],
                bestOnly: true
            },
            filterRent: {
                monetizationTypes: [ "RENT" ],
                bestOnly: true
            },
            filterFree: {
                monetizationTypes: [ "ADS", "FREE" ],
                bestOnly: true
            }
        },
        query: getDataByIdQuery
    })

    return response.data.data.node.flatrate
}