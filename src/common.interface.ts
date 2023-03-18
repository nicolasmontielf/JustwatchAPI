interface SuggestedTitleEdgesResponse {
    node: {
        id: string,
        objectType: string,
        objectId: number,
        content: {
            fullPath: string,
            title: string,
            originalReleaseYear: number,
            posterUrl: string,
            __typename: string
        },
        __typename: string
    },
    __typename: "PopularTitlesEdge"
}

export interface SuggestedTitleResponse {
    data: {
        popularTitles: {
            edges: SuggestedTitleEdgesResponse[],
        }
    }
}

export interface GetTitleOffersFlatrateResponse {
    id: string,
    presentationType: string,
    monetizationType: "FLATRATE",
    retailPrice: string | null,
    retailPriceValue: string | null,
    currency: string,
    lastChangeRetailPriceValue: string | null,
    type: string,
    package: {
        packageId: number,
        clearName: string,
        __typename: "Package"
    },
    standardWebURL: string,
    elementCount: number,
    availableTo: string,
    deeplinkRoku: string
    __typename: string
}

export interface GetTitleOffersResponse {
    data: {
        node: {
            offerCount: number,
            flatrate: GetTitleOffersFlatrateResponse[],
            buy: Array<unknown>,
            rent: Array<unknown>,
            free: Array<unknown>,
            __typename: "Movie"
        }
    }
}