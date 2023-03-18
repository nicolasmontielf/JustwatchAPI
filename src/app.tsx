import { InputSearch } from "./components/InputSearch"
import { Navbar } from "./components/Navbar"

export function App()  {
    return (
        <section class="hero is-info is-fullheight">
            <div class="bg-mask"></div>

            <div class="z-index-2">
                <div class="hero-head">
                    <Navbar />
                </div>

                <div class="hero-body is-align-items-flex-start">
                    <div class="container has-text-centered mt-6 pt-6">
                        <div class="column is-6 is-offset-3">
                            <h1 class="title is-size-1">
                                Wanna see a movie?
                            </h1>
                            <h2 class="subtitle is-size-4 pt-3">
                                Search a title and we'll let you know when and where it's available!
                            </h2>
                            <div class="py-3">
                                <InputSearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}