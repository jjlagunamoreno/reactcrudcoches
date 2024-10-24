import React, { Component } from 'react'
import axios from 'axios'
import Global from './Global'
import { Navigate, NavLink } from 'react-router-dom'

export default class Home extends Component {
    state = {
        coches: []
    }

    deleteCoche = (idCoche) => {
        let request = "/api/Coches/DeleteCoche/" + idCoche;
        let url = Global.urlApiCoches + request;
        axios.delete(url).then(response => {
            console.log("Delete");
            this.loadCoches();
        })
    }
    loadCoches = () => {
        let request = "/api/Coches";
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            console.log("cargando coches...");
            this.setState({
                coches: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadCoches();
    }
    render() {
        return (
            <div style={{ textAlign: "center", padding: "5%" }}>
                <h1>Home</h1>
                <hr />
                <table>
                    <thead>
                        <tr>
                            {/* <th>ID</th> */}
                            <th>MARCA</th>
                            {/* <th>MODELO</th>
                            <th>CONDUCTOR</th> */}
                            <th>IMAGEN</th>
                            <th>OPCIONES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.coches.map((coche, index) => {
                                return (
                                    <tr key={index} value={coche.idCoche}>
                                        {/* <td>{coche.idCoche}</td> */}
                                        <td>{coche.marca}</td>
                                        {/* <td>{coche.modelo}</td>
                                        <td>{coche.conductor}</td> */}
                                        <td><img src={coche.imagen} style={{ width: "25%" }} /></td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <NavLink to={"/details/" + coche.idCoche}>
                                                    <button className='btn btn-success'>Details</button>
                                                </NavLink>

                                                {/* Escogemos uncodeURIComponent para guardar la url entera de la imagen con todos sus caracteres */}
                                                <NavLink to={
                                                    "/update/" + coche.idCoche + "/" + coche.marca + "/" + coche.modelo + "/" + coche.conductor + "/" + encodeURIComponent(coche.imagen)
                                                }>
                                                    <button className='btn btn-primary'>Modificar</button>
                                                </NavLink>

                                                <button className='btn btn-danger' onClick={() => { this.deleteCoche(coche.idCoche); }}>Eliminar</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
