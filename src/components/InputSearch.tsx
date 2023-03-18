import { getIdByName, getInfoById } from '../services/api.service'
import { PlatformList } from './PlatformList'
import { signal } from "@preact/signals";
import { createRef } from "preact";
import { GetTitleOffersFlatrateResponse } from '../common.interface'

interface ResultSignal {
    data: GetTitleOffersFlatrateResponse[],
    name: string
}

const results = signal<ResultSignal>({
    data: [],
    name: ''
})
const inputRef = createRef()
const isLoading = signal<boolean>(false)

export function InputSearch() {
    async function handleSearch() {
        const searchValue = inputRef.current.value
        if (!searchValue) return;

        searchPlatform(searchValue)
    }

    async function searchPlatform(search: string) {
        isLoading.value = true
        const { id, name } = await getIdByName(search)
        const availablePlatforms = await getInfoById(id)
        
        results.value = {
            data: availablePlatforms,
            name: name
        }
        isLoading.value = false
    }

    return (
        <>
            <div className="field is-grouped is-align-items-center">
                <p className="control is-expanded">
                    <input
                        className="input is-medium"
                        type="text"
                        placeholder="Movie title"
                        ref={inputRef}
                        disabled={isLoading.value}
                    />
                </p>
                <p className="control">
                    <button
                        className="button is-info is-light is-medium"
                        onClick={handleSearch}
                        disabled={ isLoading.value }
                    >
                        Search
                    </button>
                </p>
            </div>
            <div className="py-5">
                {
                    isLoading.value
                    ? (<span class="loader"></span>)
                    : (<PlatformList results={results.value} />)
                }
            </div>
        </>
    )
}