import React from 'react'

export default function Pagination({gotoPrevPage, gotoNextPage}) {
    return (
        <div>
            {gotoPrevPage ? 
                <button className="btn btn-sm btn-outline-primary" onClick = {gotoPrevPage}>Previous</button> : 
                <button className="btn btn-sm btn-outline-primary" disabled>Previous</button>}
            {gotoNextPage ? 
                <button className="btn btn-sm btn-outline-primary" onClick = {gotoNextPage}>Next</button> :
                <button className="btn btn-sm btn-outline-primary" disabled>Next</button>}
        </div>
    )
}
