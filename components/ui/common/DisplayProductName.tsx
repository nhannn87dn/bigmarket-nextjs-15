import React from 'react'

type TProps = {
    productName: string;
    type?: 'h1' | 'h2' | 'h3';
}

export default function DisplayProductName({
    productName,
    type = 'h3'
}: TProps) {
    if(type === 'h1'){
        return (
            <h1 className="product-name">{productName}</h1>
        )
    }
    else if(type === 'h2'){
        return (
            <h2 className="product-name">{productName}</h2>
        )
    }
    return (
        <h3 className="product-name">{productName}</h3>
    )
}
