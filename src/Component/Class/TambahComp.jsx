
import React, {Component } from 'react'
import axios from 'axios'
import {Container, Col, Row,Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {link} from 'react-router-dom'

const api = 'http://localhost:3001'

class TambahComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            kode_barang: '',
            merek: '',
            nama_barang: '',
            stok: '',
            harga_persatuan: '',
            response: '',
            display: 'none'

        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addbarang = () => {
        axios.post(api+'/tambah', {
            kode_barang: this.state.kode_barang,
            merek: this.state.merek,
            nama_barang: this.state.nama_barang,
            stok: this.state.stok,
            harga_persatuan: this.state.harga_persatuan
        }).then(json => {
            if(json.data.status === 200){
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
                <Button type="button" onClick={this.Addbarang}>Submit</Button>
                </Col>
            </Row>
        </FormGroup>
        </Col>
    </Form>
</Container>
        )
    }
}

export default TambahComp

