import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate, NavLink } from 'react-router-dom'

export default class DetallesCoches extends Component {
    state = {
        coche: []
    }
    loadCoches = () => {
        let request = "/api/Coches/FindCoche/" + this.props.idCoche;
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            console.log("cargando coche...");
            this.setState({
                coche: response.data
            })
        })
    }
    componentDidMount = () => {
        this.loadCoches();
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card shadow-lg">
                            <div className="card-header bg-primary text-white text-center">
                                <h2>Detalles del Coche: {this.props.idCoche}</h2>
                            </div>
                            <div className="card-body">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <strong>ID:</strong> {this.state.coche.idCoche}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Marca:</strong> {this.state.coche.marca}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Modelo:</strong> {this.state.coche.modelo}
                                    </li>
                                    <li className="list-group-item">
                                        <strong>Conductor:</strong> {this.state.coche.conductor}
                                    </li>
                                    <li className="list-group-item text-center">
                                        <img src={this.state.coche.imagen} alt="Imagen del coche" className="img-fluid rounded" style={{ width: "50%" }} />
                                    </li>
                                </ul>
                            </div>
                            <div className="card-footer text-center">
                                <NavLink to="/"><button className="btn btn-secondary">Volver</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}
