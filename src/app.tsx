import { InputSearch } from "./components/InputSearch"
import { Navbar } from "./components/Navbar"

export function App()  {
    return (
        <section className="hero is-info is-fullheight">
            <div className="bg-mask"></div>

            <div className="z-index-2">
                <div className="hero-head">
                    <Navbar />
                </div>

                <div className="hero-body is-align-items-flex-start">
                    <div className="container has-text-centered mt-6 pt-6">
                        <div className="column is-6 is-offset-3">
                            <h1 className="title is-size-1">
                                Wanna see a movie?
                            </h1>
                            <h2 className="subtitle is-size-4 pt-3">
                                Search a title and we'll let you know when and where it's available!
                            </h2>
                            <div className="py-3">
                                <InputSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}