import { GetTitleOffersFlatrateResponse } from '../common.interface'

interface Props {
    results: {
        name: string,
        data: GetTitleOffersFlatrateResponse[]
    }
}

export function PlatformList({ results }: Props) {
    if (!results.data?.length) {
        return null;
    }

    return (
        <>
            <h3 className="is-size-5">You can see {results.name} on:</h3>
            <table className="table is-fullwidth mt-5">
                <thead>
                    <tr>
                        <th>Platform</th>
                        <th>Quality</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody className="has-text-left">
                    {
                        results.data.map((item: GetTitleOffersFlatrateResponse) => {
                            return (
                                <tr>
                                    <td>{item.package.clearName}</td>
                                    <td>{item.presentationType}</td>
                                    <td>
                                        <a href={item.standardWebURL} target="_blank">Watch it!</a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>      
            </table>
        </>
    )
}