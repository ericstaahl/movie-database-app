import Button from "react-bootstrap/Button"

const Pagination = ({ page, total_pages, handleSetSearchParams }) => {
    console.log("Pagination: ", page)
    return (
        <div className="d-flex justify-content-center sticky-bottom bg-dark">
            <Button className="mx-2 my-2" disabled={page <= 1} onClick={() => {
                // If page is truthy and not equal to 1, subtract page by one
                if (page && page != 1) {
                    page--
                } else {
                    // Else, stay on first page
                    page = 1
                }
                handleSetSearchParams(page)
            }
            }>←</Button>
            {/* If the value of page is equal to or higher than total_pages, make the button inactive. */}
            {/* The button should also be inactive if the value of page is equal to or higher than 500.
            Most endpoints only allow you to go as far as 500 pages */}
            <Button className="mx-2 my-2" disabled={page >= total_pages || page >= 500} onClick={() => {
                if (page) {
                    page++
                    console.log(page)
                } else {
                    // If page is falsy, you are on the the first page, therefore page is set to 2
                    page = 2
                    console.log(page)
                }
                // Setting the search params so that the url is saved to browser history.
                handleSetSearchParams(page)
            }
            }>→</Button>
        </div>
    )
}

export default Pagination