import './index.css'

const ProductHeader = (props) => {
    const { sortbyOptions, activeOptionId, setActiveOptionId } = props

    const onChangeSortby = (event) => {
        setActiveOptionId(event.target.value)
    }
    

    return (
        <div className='products-header'>
            <h1 className='products-list-heading'>All Products</h1>
            <div className="sort-by-container">
                <h1 className='sort-by'>Sort by</h1>
                <select className='sort-by-select' value={activeOptionId} onChange={onChangeSortby}>
                    {sortbyOptions.map((eachOption) => (
                        <option>{eachOption.displayText}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default ProductHeader