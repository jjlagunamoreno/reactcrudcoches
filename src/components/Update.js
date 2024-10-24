import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate, NavLink } from 'react-router-dom'

export default class Update extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false,
    }

    updateDepartamento = (e) => {
        e.preventDefault();
        let request = "/api/Coches/UpdateCoche"
        let url = Global.urlApiCoches + request

        let id = parseInt(this.cajaId.current.value)
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;
        let imagen = decodeURIComponent(this.cajaImagen.current.value); // DECODIFICA la URL antes de enviarla

        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.put(url, coche).then(response => {
            console.log("Coche modificado correctamente");
            this.setState({
                status: true
            });
        }).catch(error => {
            console.error("Error al modificar el coche: ", error.response || error);
        });
    }
    render() {
        return (
            <div style={{ padding: "5%" }}>
                {
                    this.state.status === true &&
                    (<Navigate to="/" />)
                }

                <h2>Update</h2>
                <hr></hr>
                <NavLink to="/">Atrás</NavLink>
                <form onSubmit={this.updateDepartamento} style={{ padding: "5%" }}>
                    <label className="form-label">ID</label>
                    <input className="form-control" readOnly defaultValue={this.props.idCoche} ref={this.cajaId}></input>
                    <label className="form-label">MARCA</label>
                    <input className="form-control" defaultValue={this.props.marca} ref={this.cajaMarca}></input>
                    <label className="form-label">MODELO</label>
                    <input className="form-control" defaultValue={this.props.modelo} ref={this.cajaModelo}></input> <br />
                    <label className="form-label">CONDUCTOR</label>
                    <input className="form-control" defaultValue={this.props.conductor} ref={this.cajaConductor}></input> <br />
                    <label className="form-label">IMAGEN</label>
                    <input className="form-control" defaultValue={this.props.imagen} ref={this.cajaImagen}></input> <br />
                    <button className="btn btn-primary">Modificar</button>
                </form>
            </div>
        )
    }
}
