import React from 'react'
import { useState } from "react";
import { MyOrderForm } from './style'
import { useRequestData } from '../../hooks/useRequestData'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToEndOrder } from '../../routers/Coordinator';

export default function Form({ productList, setProductList }) {
    const navigate = useNavigate()
    const [visibleButtonClient, setVisibleButtonClient] = useState(true)
    const [visibleButtonProduct, setVisibleButtonProduct] = useState(true)
    const [form, onChange, restForm] = useForm({ client: '', product: '', qty: 1, deliveryDate: '' })
    const [dataClient, isLoadingClient, errorClient, upClient, setUpClient] = useRequestData('http://localhost:3003/clients');
    const [dataProduct, isLoadingProduct, errorProduct] = useRequestData('http://localhost:3003/products');
    const selectClient = !isLoadingClient && dataClient && dataClient.find((dClient) => {
        return dClient.name === form.client;
    })

    const addClient = () => {
        const body =
        {
            "name": form.client
        }
        axios.post('http://localhost:3003/client', body, {})
            .then((response) => {
                setUpClient(!upClient)
                console.log(response)
            }
            ).catch((error) => {
                console.log(error.message)
            })
    }

    const selectCLientButton = () => {
        setVisibleButtonClient(!visibleButtonClient)
    }


    const selectProduct = !isLoadingProduct && dataProduct && dataProduct.find((dProduct) => {
        return dProduct.name === form.product;
    })

    const addProduct = () => {
        const newProduct = selectProduct;
        newProduct.qty = form.qty;
        setProductList([...productList, newProduct])
    }

    const makeOrder = (e) => {
        e.preventDefault();
        if (!productList || !form.deliveryDate || !selectClient) {
            alert('Confira seus dados')
        } else {
            const deliveryDateDb = `${form.deliveryDate.split('/')[2]}-${form.deliveryDate.split('/')[1]}-${form.deliveryDate.split('/')[0]}}`
            const productListDB = productList.map((p) => {
                return { 'id': p.id, 'qty': Number(p.qty) }
            })
            const body = {
                'fk_client': Number(selectClient.id),
                'delivery_date': deliveryDateDb,
                'products': productListDB
            }

            axios.post('http://localhost:3003/order', body, {})
                .then((response) => {
                    goToEndOrder(navigate)
                }).catch((error) => {
                    console.log(error.message)
                })
        }
    }

    return (
        <MyOrderForm onSubmit={makeOrder}>
            {
                selectClient && !visibleButtonClient &&
                <div>
                    <h1>Cliente: {selectClient.name}</h1>
                </div>
            }
            {selectClient && !visibleButtonClient ||
                <div id='select-client'>
                    <label htmlFor='client'>Nome do cliente</label>
                    <input id='client' list='dataClient' name='client' onChange={onChange} value={form.client}></input>
                    <datalist id='dataClient'>
                        {isLoadingClient && !dataClient && <option>Carregando...</option>}
                        {!isLoadingClient && dataClient && dataClient.map((client) => {
                            return (
                                <option key={client.id}>
                                    {client.name}
                                </option>
                            )
                        })}
                    </datalist>
                    {!selectClient && form.client.length > 2 &&
                        <button type='button' onClick={() => { addClient() }}>Cadastrar Cliente</button>}

                    {selectClient && visibleButtonClient &&
                        <button type='button' onClick={() => { selectCLientButton() }}>Confirmar</button>}
                </div>
            }
            {selectClient && !visibleButtonClient &&
                <div id='select-product'>
                    <label htmlFor='product'>Nome do Produto</label>
                    <input id='product' list='dataProduct' name='product' value={form.product} onChange={onChange}></input>
                    <datalist id='dataProduct'>
                        {isLoadingProduct && !dataProduct && <option>Carregando...</option>}
                        {!isLoadingProduct && dataProduct && dataProduct.map((product) => {
                            return (
                                <option key={product.id}>
                                    {product.name}
                                </option>
                            )
                        })}
                    </datalist>
                    <label htmlFor='qty' >Quantidade</label>
                    <input id='qty' type={'number'} name='qty' value={form.qty} onChange={onChange} ></input>
                    <p>R$ {selectProduct && parseFloat(selectProduct.price * form.qty).toFixed(2)}</p>

                    {selectProduct && visibleButtonProduct && selectProduct.qty_stock >= form.qty &&
                        <button type='button' onClick={() => { addProduct() }}>Confirmar</button>
                    }
                    {selectProduct && selectProduct.qty_stock < form.qty &&
                        <h3>Produto sem estoque!!</h3>
                    }

                </div>
            }
            {productList.length > 0 &&
                <div id='order'>
                    <label htmlFor='deliveryDate'>Data de entrega (DD/MM/AAAA) </label>
                    <input id='deliveryDate' name='deliveryDate' onChange={onChange} value={form.deliveryDate}></input>
                    <button type='submit'>Confirmar pedido</button>
                </div>
            }
        </MyOrderForm>
    )
}