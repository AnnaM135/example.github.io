import React from 'react'

function Card({data, sum, del}) {
    console.log(data)
    return (
        <div>
           <h4 className="text-center">Basket</h4>
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>IMAGE</th>
                        <th>NAME</th>
                        <th>COUNT</th>
                        <th>PRICE</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(item => (
                            <tr key = {item.id}>
                                <td>
                                    <img src = {item.img} alt = {item.name} style = {{width: "80px", height: "80px"}} />
                                </td>
                                <td>{item.name}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                                <td className = "alert-dark align-items-center d-flex justify-content-around">
                                    <button className = "btn btn-primary">+</button>
                                    <button className = "btn btn-primary">-</button>
                                    <button className = "btn btn-danger" onClick = {() => del(item.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <hr/>
            <h1>Total Sum : {sum}</h1>
        </div>
    )
}

export default Card
