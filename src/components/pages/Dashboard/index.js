import React, { useState, useEffect } from 'react';
import firebase from "../../../config/Firebase1"
import NavBar from '../../molecules/NavBar';

const Dashboard = () => {
    const [positive, setPositive] = useState("");
    const [sembuh, setSembuh] = useState("");
    const [meninggal, setMeninggal] = useState("");
    
    const [product, setProduct] = useState([]);

    const [button, setButton] = useState("Save");

    const[selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        firebase
        .database()
        .ref("products")
        .once("value", (res) => {
            if(res.val()){
                const rawData = res.val();
                const productArr = [];
                Object.keys(rawData).map(item => {
                    productArr.push({
                        id: item,
                        ...rawData[item],
                    });
                });
                setProduct(productArr);
            }
        });
    }, []);

    const resetForm = () => {
        setPositive("");
        setSembuh("");
        setMeninggal("");
        setButton('Save')
        setSelectedProduct({});
    };

    const onSubmit = () => {
        const data = {
            positive: positive,
            sembuh: sembuh,
            meninggal: meninggal,
        };
        if(button === 'Save'){
            firebase.database().ref("products").push(data);
        }else{
            firebase.database().ref(`products/${selectedProduct.id}`).set(data);
        }
        // firebase.database().ref("products").push(data);
        // firebase.database().ref("products/2").set(data);
        resetForm();
    };

    const onUpdateData = (item) => {
        setPositive(item.positive)
        setSembuh(item.sembuh)
        setMeninggal(item.meninggal)
        setButton("Update");
        setSelectedProduct(item);
    }
    const onDeleteData = (item) => {
        //Delete
        firebase.database().ref(`products/${item.id}`).remove();
    }

    return (
        <div className="container mt-5">
            <NavBar/>
            <h1>Data Indonesia</h1>
            <hr/>
            <div className="col-6">
            <p>Positif</p>
            <input className="from-control" placeholder="positif" 
            value={positive} onChange={(e) => setPositive(e.target.value)}/>

            <p>Sembuh</p>
            <input className="from-control" placeholder="sembuh" 
            value={sembuh} onChange={(e) => setSembuh(e.target.value)}/>

            <p>Meninggal</p>
            <input className="from-control" placeholder="meninggal" 
            value={meninggal} onChange={(e) => setMeninggal(e.target.value)}/>
            <br/>
            <br/>
            <button className="btn btn-primary" onClick={onSubmit}>{button}</button>
            </div>
            

            <hr/>
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Positif</th>
                        <th>Sembuh</th>
                        <th>Meninggal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map(item => (
                            <tr key={item.id}>
                                <td>{item.positive}</td>
                                <td>{item.sembuh}</td>
                                <td>{item.meninggal}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => onUpdateData(item)}>Update</button>
                                    <button className="btn btn-danger" onClick={() => onDeleteData(item)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            

        </div>


    );
};

export default Dashboard;