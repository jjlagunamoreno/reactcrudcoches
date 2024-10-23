import React, { Component } from 'react'
import axios from 'axios';
import Global from './Global';
import { Navigate } from 'react-router-dom';

export default class Create extends Component {
    cajaId = React.createRef();
    cajaMarca = React.createRef();
    cajaModelo = React.createRef();
    cajaConductor = React.createRef();
    cajaImagen = React.createRef();

    state = {
        status: false,
    }

    insertarCoche = (e) => {
        e.preventDefault();
        let request = "/api/Coches/InsertCoche"
        let url = Global.urlApiCoches + request

        let id = parseInt(this.cajaId.current.value)
        let marca = this.cajaMarca.current.value;
        let modelo = this.cajaModelo.current.value;
        let conductor = this.cajaConductor.current.value;
        let imagen = this.cajaImagen.current.value;

        let coche = {
            idCoche: id,
            marca: marca,
            modelo: modelo,
            conductor: conductor,
            imagen: imagen
        }

        axios.post(url, coche).then(response => {
            console.log("creando coche...")
            this.setState({
                status: true
            })
        })
    }

    render() {
        if (this.state.status == true) {
            return (<Navigate to="/" />)
        } else {
            return (
                <div style={{ padding: "5%" }}>
                    <h1>Create</h1>
                    <hr></hr>
                    <form onSubmit={this.insertarCoche} style={{ padding: "5%" }}>
                        <label className="form-label">ID</label>
                        <input className="form-control" ref={this.cajaId}></input>
                        <label className="form-label">MARCA</label>
                        <input className="form-control" ref={this.cajaMarca}></input>
                        <label className="form-label">MODELO</label>
                        <input className="form-control" ref={this.cajaModelo}></input> <br />
                        <label className="form-label">CONDUCTOR</label>
                        <input className="form-control" ref={this.cajaConductor}></input> <br />
                        <label className="form-label">IMAGEN</label>
                        <input className="form-control" ref={this.cajaImagen}></input> <br />
                        <button className="btn btn-primary">Crear Coche</button>
                    </form>
                </div>
            )
        }
    }
}
