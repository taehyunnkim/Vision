import React from 'react'

function Items({ items }) {
    const itemList = items.map((item) => {
        return (
            <div className="box col-3" key={item.id}>
                <div className="card p-2">
                    <a href={""}>
                        <img className="card-img-top" src={item.images[0].src} alt={item.title} />
                        <div className="card-body">
                            <p className="card-title">{item.title}</p>
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
