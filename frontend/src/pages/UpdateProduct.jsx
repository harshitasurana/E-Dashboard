import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UpdateProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [productId, setProductId] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')
  const [stock, setStock] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    getProductDetails()
  }, [])

  const getProductDetails = async () => {
    const res = await fetch(`http://localhost:3200/product/${id}`)
    const data = await res.json()

    setProductId(data.productId)
    setName(data.name)
    setCompany(data.company)
    setPrice(data.price)
    setCategory(data.category)
    setStock(data.stock)
    setDescription(data.description)
  }

  // 🔹 Update product
  const updateProduct = async () => {
    const res = await fetch(`http://localhost:3200/update-product/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        company,
        price,
        category,
        stock,
        description
      })
    })

    const data = await res.json()
    if (data.acknowledged) {
      alert("Product updated successfully")
      navigate('/')
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl bg-white border rounded-lg shadow-sm p-8">

        <h1 className="text-2xl font-semibold mb-6">
          Update Product
        </h1>

        {/* Product ID */}
        <input
          type="text"
          value={productId}
          disabled
          className="w-full mb-4 px-4 py-2.5 rounded-md
                     border bg-gray-100 text-gray-500"
        />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Product Name"
          className="w-full mb-4 px-4 py-2.5 border rounded-md"
        />

        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company"
          className="w-full mb-4 px-4 py-2.5 border rounded-md"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Price"
          className="w-full mb-4 px-4 py-2.5 border rounded-md"
        />

        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Category"
          className="w-full mb-4 px-4 py-2.5 border rounded-md"
        />

        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          className="w-full mb-4 px-4 py-2.5 border rounded-md"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows="3"
          className="w-full mb-6 px-4 py-2.5 border rounded-md"
        />

        <button
          onClick={updateProduct}
          className="w-full bg-black text-white py-2.5 rounded-md hover:bg-gray-800"
        >
          Update Product
        </button>

      </div>
    </div>
  )
}

export default UpdateProduct
