import React, { useEffect, useState } from 'react'
import './index.css'
import ProductCard from '../ProductCard'
import Cookies from 'js-cookie'
import ProductHeader from '../ProductHeader'


const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]


const AllProductsSection = () => {
    const [ productsList, setProductsList ] = useState([])
    const [activeOptionId, setActiveOptionId] = useState(sortbyOptions[0].optionId)

    const jwtToken = Cookies.get('jwt_token');

    const apiUrl = `https://apis.ccbp.in/?sort_by=${activeOptionId}`

    console.log(apiUrl)
    

    useEffect(() => {
        const getData = async () => {
            const apiUrl = 'https://apis.ccbp.in/products';

            const options = {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                },
                method: "GET"
            }
            try {
                const response = await fetch(apiUrl, options);
                if(response.ok === true) {
                    const fetchedData = await response.json();
                    const updatedData = fetchedData.products.map((product) => ({
                        title: product.title,
                        brand: product.brand,
                        price: product.price,
                        id: product.id,
                        imageUrl: product.image_url,
                        rating: product.rating
                    }))
                    setProductsList(updatedData)
                } else {
                    console.log(`HTTP error! status: ${response.status}`)
                }

            } catch(error) {
                console.log(`Error fetching data: ${error.message}`)
            }
        }
        getData()
    }, [jwtToken])

    return (
        <div>
            <ProductHeader sortbyOptions={sortbyOptions} activeOptionId={activeOptionId} setActiveOptionId={setActiveOptionId} />
            <ul className="products-list">
                {productsList.map((eachProduct) => (
                    <ProductCard key={eachProduct.id} productData={eachProduct} />
                ))}
            </ul>
        </div>
    )
}

export default AllProductsSection