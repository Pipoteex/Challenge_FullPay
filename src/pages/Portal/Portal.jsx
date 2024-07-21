import React, { useEffect, useState } from "react";

import {
    Table,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import axios from "axios";

const Portal = () => {
    //STATES
    const [dataList, setDataList] = useState([]);

    //HOOKS

    //FUNCTIONS

    useEffect(() => {
        /* console.log(getData()); */
        axios
            .get("http://127.0.0.1:5000/datos-json")
            .then((response) => {
                setDataList(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    /*  const getData = async () => {
        let res = await axios.get("http://127.0.0.1:5000/datos-json");
        return res.data;
    }; */

    return (
        <div style={{ marginTop: "70px", padding: "30px" }}>
            <div>Historial pagos</div>
            <div className="table-responsive">
                <Table className="table table-dark mb-0">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Asunto</th>
                            <th>Cuenta</th>
                            <th>Banco</th>
                            <th>Factura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataList.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{item.id}</th>
                                    <td>{item.Fecha}</td>
                                    <td>{item.Asunto}</td>
                                    <td>{item.Cuenta}</td>
                                    <td>{item.Banco}</td>
                                    <td>{item.Factura}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Portal;
