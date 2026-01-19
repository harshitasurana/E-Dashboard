import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';
const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        let result = await fetch("http://localhost:3200/products")
        result = await result.json()
        setProducts(result)
    }
    console.warn("Products", products);

    const deleteProduct = async (id) => {
        console.warn(id);

        let result = await fetch(`http://localhost:3200/delete-product/${id}`, {
            method: 'Delete',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json()
        if (result) {
            getProducts()
        }
    }



    return (
        <div className="min-h-[80vh] bg-gray-100 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {products.map((item, idx) => (

                    <div
                        key={item._id}
                        className="relative bg-white border border-gray-200
             rounded-lg shadow-sm p-6
             hover:shadow-md transition"
                    >

                        {/* Edit + Delete Icons */}
                        <div className="absolute top-3 right-3 flex gap-2">

                            {/* Edit */}
                            <Link
                                className="w-8 h-8 flex items-center justify-center
                 text-gray-400 hover:text-black
                 hover:bg-gray-100 rounded-full transition"
                 to={`/update/${item._id}`}
                                
                            >
                                <SquarePen size={16} />
                            </Link>

                            {/* Delete */}
                            <button
                                className="w-8 h-8 flex items-center justify-center
                 text-gray-400 hover:text-red-600
                 hover:bg-gray-100 rounded-full transition
                 text-lg font-bold"
                                title="Delete product"
                                onClick={() => deleteProduct(item._id)}
                            >
                                ×
                            </button>

                        </div>

                        {/* Top row */}
                        <div className="flex justify-between items-center mb-3 pr-16">
                            <span className="text-sm text-gray-500">
                                {idx + 1}
                            </span>

                            <span className="text-xs bg-gray-100 text-gray-600
                     px-3 py-1 rounded-full">
                                {item.category}
                            </span>
                        </div>


                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                            {item.name}
                        </h2>

                        <p className="text-sm text-gray-500 mb-3">
                            {item.company}
                        </p>

                        <div className="text-sm text-gray-700 space-y-1 mb-4">
                            <p><span className="font-medium">Product ID:</span> {item.productId}</p>
                            <p><span className="font-medium">Price:</span> ₹{item.price}</p>
                            <p><span className="font-medium">Stock:</span> {item.stock}</p>
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-3">
                            {item.description}
                        </p>

                    </div>


                ))}
            </div>
        </div>

    )
}

export default Products

