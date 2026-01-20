import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate=useNavigate()
    const [productId, setProductId] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(false)

    const handleProduct = async (e) => {
        if (!productId || !name || !company || !price || !category || !stock || !description) {
            setError(true)
            return false
        }
        let details = await fetch('http://localhost:3200/add-product', { method: 'post', body: JSON.stringify({ productId, name, company, category, price, stock, description }), 
        headers: {
             'Content-Type': 'application/json' 
            } 
        }) 
        details = await details.json() 
        if(details){
            navigate('/')
        }
        

    }

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-xl bg-white p-8 rounded-lg border border-gray-200 shadow-sm">

                <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                    Add Product
                </h1>

                {/* Product ID */}
                <input
                    type="text"
                    placeholder="Enter product ID"
                    className={`w-full px-4 py-2.5 rounded-md border
            ${error && !productId ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:border-black mb-1`}
                    value={productId}
                    onChange={(e) => setProductId(e.target.value)}
                />
                {error && !productId && (
                    <span className="text-xs text-red-500 mb-3 block">
                        Enter valid product ID
                    </span>
                )}

                {/* Product Name */}
                <input
                    type="text"
                    placeholder="Enter product name"
                    className={`w-full px-4 py-2.5 rounded-md border
            ${error && !name ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:border-black mb-1`}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {error && !name && (
                    <span className="text-xs text-red-500 mb-3 block">
                        Enter valid product name
                    </span>
                )}

                {/* Company */}
                <input
                    type="text"
                    placeholder="Enter company / brand name"
                    className={`w-full px-4 py-2.5 rounded-md border
            ${error && !company ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:border-black mb-1`}
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />
                {error && !company && (
                    <span className="text-xs text-red-500 mb-3 block">
                        Enter valid company name
                    </span>
                )}

                {/* Price */}
                <input
                    type="number"
                    placeholder="Enter price"
                    className={`w-full px-4 py-2.5 rounded-md border
            ${error && !price ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:border-black mb-1`}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                {error && !price && (
                    <span className="text-xs text-red-500 mb-3 block">
                        Enter valid price
                    </span>
                )}

                {/* Category */}
                <input
                    type="text"
                    placeholder="Enter category"
                    className={`w-full px-4 py-2.5 rounded-md border
            ${error && !category ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:border-black mb-1`}
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                {error && !category && (
                    <span className="text-xs text-red-500 mb-3 block">
                        Enter valid category
                    </span>
                )}

                {/* Stock */}
                <input
                    type="number"
                    placeholder="Enter stock quantity"
                    className={`w-full px-4 py-2.5 rounded-md border
            ${error && !stock ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:border-black mb-1`}
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                {error && !stock && (
                    <span className="text-xs text-red-500 mb-3 block">
                        Enter valid stock quantity
                    </span>
                )}

                {/* Description */}
                <textarea
                    placeholder="Enter product description"
                    rows="3"
                    className={`w-full px-4 py-2.5 rounded-md border resize-none
            ${error && !description ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:border-black mb-1`}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                {error && !description && (
                    <span className="text-xs text-red-500 mb-4 block">
                        Enter valid description
                    </span>
                )}

                {/* Submit Button */}
                <button
                    className="w-full bg-black text-white py-2.5 rounded-md
                     hover:bg-gray-800 transition font-medium"
                    onClick={handleProduct}
                >
                    Add Product
                </button>

            </div>
        </div>
    )
}

export default AddProduct
