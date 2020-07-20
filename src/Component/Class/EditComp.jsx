
import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import {Link} from 'react-router-dom'
import {Container, Col, Row,Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'

const api = 'http://localhost:3001'

class EditComp extends Component{
    constructor(props){
        super(props)

        this.state = {
            id_barang: this.props.location.state.id_barang,
            kode_barang: this.props.location.state.kode_barang,
            merek: this.props.location.state.merek,
            nama_barang: this.props.location.state.nama_barang,
            stok: this.props.location.state.stok,
            harga_persatuan: this.props.location.state.harga_persatuan,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahBarang = (id_barang) => {
        const data = qs.stringify({
            id_barang: id_barang,
            kode_barang: this.state.kode_barang,
            merek: this.state.merek,
            nama_barang: this.state.nama_barang,
            stok: this.state.stok,
            harga_persatuan: this.state.harga_persatuan

        });
        axios.put(api+ '/ubah', data)
        .then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }

    render() {
        return(
            <Container>
    <h4>Form Tambah Data</h4>
    <Alert color="info" style={{display: this.state.display}}>
        {this.state.response}
    </Alert>
    <Form classname="form">
        <Col>
        <Label>Kode Barang</Label>
        <FormGroup>
            <Row>
                <Col>
                <Input type="text" name="kode_barang" value={this.state.kode_barang} onChange={this.handleChange} placeholder="Masukan Kode Barang"/>
                </Col>
            </Row>
        </FormGroup>
        <Label>Merek</Label>
        <FormGroup>
            <Row>
                <Col>
                <Input type="text" name="merek" value={this.state.merek} onChange={this.handleChange} placeholder="Masukan Merek"/>
                </Col>
            </Row>
        </FormGroup>
        <Label>Nama Barang</Label>
        <FormGroup>
            <Row>
                <Col>
                <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                </Col>
            </Row>
        </FormGroup>
        <Label>Stok</Label>
        <FormGroup>
            <Row>
                <Col>
                <Input type="text" name="stok" value={this.state.stok} onChange={this.handleChange} placeholder="Masukan Stok"/>
                </Col>
            </Row>
        </FormGroup>
        <Label>Harga Persatuan</Label>
        <FormGroup>
            <Row>
                <Col>
                <Input type="text" name="harga_persatuan" value={this.state.harga_persatuan} onChange={this.handleChange} placeholder="Masukan Harga Persatuan"/>
                </Col>
            </Row>
        </FormGroup>

        <FormGroup>
            <Row>
                <Col>
                <Button type="button" onClick={()=>this.ubahBarang(this.state.id_barang)}>Update</Button>
                </Col>
            </Row>
        </FormGroup>
        </Col>
    </Form>
</Container>
        )
    }
}

export default EditComp

