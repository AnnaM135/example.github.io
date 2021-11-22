import React from 'react'

function Products({data, add}) {
    return (
        <div>
            <h4 className="text-center">All Products</h4>
            <div className = "d-flex align-items-center justify-content-around flex-wrap">
                {
                    data.map(item => (
                        <div key = {item.id} className = "card alert-warning d-flex align-items-center justify-content-around" style = {{padding: "20px", width: "250px", height: "400px", float: "left"}}>
                            <img src = {item.img} alt = {item.name} style = {{width: "200px", height: "200px"}}/>
                            <h4>{item.name}</h4>
                            <p>Count: {item.count}</p>
                            <p>Price: {item.price} $</p>
                            <button className ="btn btn-warning" onClick={() => add(item)}>Add to Card</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products
