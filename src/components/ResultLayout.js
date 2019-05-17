import React from 'react';

function ResultLayout(props) {
    if (!props.result.country) {
        return (
            <dir>Loading..</dir>
        )
    }
    return (
        <div className="result-layout">
            <p>Thi is result layout{props.result.country}</p>
        </div>
    )
}
export default ResultLayout