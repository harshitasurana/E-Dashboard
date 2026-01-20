import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { SquarePen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)



const Products = () => {

    const location = useLocation()
    const containerRef = useRef(null)

    const [products, setProducts] = useState([])
    useEffect(() => {
        const query = new URLSearchParams(location.search)
        const key = query.get('search')

        if (key) {
            searchProducts(key)
        } else {
            getProducts()
        }
    }, [location.search])


    const getProducts = async () => {
        let result = await fetch("http://localhost:3200/products", {
            headers: {
                authorization: JSON.parse(localStorage.getItem('token'))
            }
        })
        result = await result.json()
        setProducts(result)
    }

    const searchProducts = async (key) => {
        let result = await fetch(`http://localhost:3200/search/${key}`)
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
    useGSAP(
        () => {
            if (!products.length) return

            gsap.fromTo(
                '.product-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.12,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top bottom', // IMPORTANT
                    }
                }
            )
        },
        { scope: containerRef, dependencies: [products] }
    )




    return (
        <div className="  min-h-[80vh]  p-8">
            <div ref={containerRef} className="product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {
                    products.length > 0 ? products.map((item, idx) => (

                        <div
                            key={item._id}
                            className="product-card relative
                     bg-white/70 backdrop-blur-md
                     border border-white/40
                     rounded-xl shadow-lg
                     p-6 transition
                     hover:shadow-xl hover:-translate-y-1"
                        >

                            {/* Edit + Delete Icons */}
                            <div className="absolute top-3 right-3 flex gap-2">

                                {/* Edit */}
                                <Link
                                    className="w-9 h-9 flex items-center justify-center
                         text-gray-500 hover:text-black
                         bg-white/60 backdrop-blur
                         hover:bg-white/80
                         rounded-full transition"
                                    to={`/update/${item._id}`}
                                >
                                    <SquarePen size={16} />
                                </Link>

                                {/* Delete */}
                                <button
                                    className="w-9 h-9 flex items-center justify-center
                         text-gray-500 hover:text-red-600
                         bg-white/60 backdrop-blur
                         hover:bg-white/80
                         rounded-full transition
                         text-lg font-bold"
                                    title="Delete product"
                                    onClick={() => deleteProduct(item._id)}
                                >
                                    ×
                                </button>

                            </div>

                            {/* Top row */}
                            <div className="flex justify-between items-center mb-3 pr-20">
                                <span className="text-sm text-gray-500">
                                    {idx + 1}
                                </span>

                                <span className="text-xs bg-white/60 backdrop-blur
                             text-gray-700 px-3 py-1 rounded-full">
                                    {item.category}
                                </span>
                            </div>

                            <h2 className="text-lg font-semibold text-gray-900 mb-1">
                                {item.name}
                            </h2>

                            <p className="text-sm text-gray-600 mb-3">
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

                    ))
                        :
                        <div className="col-span-full flex flex-col items-center justify-center
                      py-24 text-gray-600">

                            <div className="w-16 h-16 mb-4 flex items-center justify-center
                        rounded-full bg-white/60 backdrop-blur
                        shadow text-gray-500 text-2xl">
                                !
                            </div>

                            <h2 className="text-lg font-semibold mb-1">
                                No products found
                            </h2>

                            <p className="text-sm text-gray-500">
                                Try searching with a different keyword
                            </p>

                        </div>
                }

            </div>
        </div>


    )
}

export default Products

