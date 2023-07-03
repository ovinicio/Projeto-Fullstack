import React, { useState } from "react";
import Header from "../../components/header";
import Form from "../../components/form";
import ProductList from "../../components/productList";

export default function Home() {
    const [productList, setProductList] = useState([])

    return (
        <div>
            <Header 
                            
            />
            <ProductList
                productList={productList}
                setProductList={setProductList}
            />
            <Form 
                productList={productList}
                setProductList={setProductList}
            />
        </div>
    )
}