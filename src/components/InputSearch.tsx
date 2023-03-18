export function InputSearch() {
    return (
        <div className="field is-grouped is-align-items-center">
            <p className="control is-expanded">
                <input className="input is-medium" type="text" placeholder="Movie title" />
            </p>
            <p className="control">
                <a className="button is-info is-light is-medium">
                    Search
                </a>
            </p>
        </div>
    )
}