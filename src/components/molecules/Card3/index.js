import React from 'react'

function Card3 ({name, positif, sembuh, meninggal}) {
    return (
        <div  className="card" style={{ width: "18rem"}}>
            <div className="card-body">
                <h5 class="card-title">Meninggal</h5>
                    <p className="card-text"><h3>{positif}</h3></p>
                    <p className="card-text"><h3>{sembuh}</h3></p>
                    <p className="card-text"><h3>{meninggal}</h3></p>
            </div>
        </div>
    )
}

export default Card3;