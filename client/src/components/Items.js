import React from 'react'

function Items({ items }) {
    const itemList = items.map((item) => {
        return (
            <div className="box col-3" key={item.id}>
                <div className="card p-2">
                    <a href={item.link}>
                        <img className="card-img-top" src={item.image} alt={item.name} />
                        <div className="card-body">
                            <p className="card-title">{item.name}</p>
                            <p className="card-subtitle">{item.price}</p>
                        </div>
                    </a>
                </div>
            </div>
        );
    })

    return (
        <div className="row">
            {itemList}
        </div>
    )
}

export default Items;
