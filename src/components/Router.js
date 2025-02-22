import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Menu from './Menu'
import Home from './Home'
import Create from './Create'
import NotFound from './NotFound'
import Update from './Update'
import DetallesCoches from './DetallesCoches'

export default class Router extends Component {
    render() {
        function UpdateElement(params) {
            let { idCoche, marca, modelo, conductor, imagen } = useParams();
            return (<Update idCoche={idCoche} marca={marca} modelo={modelo} conductor={conductor} imagen={imagen} />)
        }
        function DetallesCochesElement(params) {
            let { idCoche } = useParams();
            return (<DetallesCoches idCoche={idCoche} />)
        }
        return (
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/details/:idCoche' element={<DetallesCochesElement />} />
                    <Route path='/update/:idCoche/:marca/:modelo/:conductor/:imagen' element={<UpdateElement />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        )
    }
}
