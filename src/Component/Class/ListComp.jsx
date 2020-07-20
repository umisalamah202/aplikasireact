import React, { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import { type } from 'os'

const api = 'http://localhost:3001'

class ListComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            barang: [],
            response: '',
            display: 'none'

        }
    }

    componentDidMount() {
        axios.get(api + '/tampil').then(res => {
            this.setState({
                barang: res.data.values
            })
        })
    }

    Deletebarang = (id_barang) => {
        const { barang } = this.state
        const data = qs.stringify({
            id_barang: id_barang

        })

        axios.delete(api + '/hapus',
            {
                data: data,
                headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            }
        ).then(json => {
            if (json.data.status === 200) {
                this.setState({
                    response: json.data.values,
                    barang: barang.filter(barang => barang.id_barang !== id_barang),
                    display: 'block'
                })
                this.props.history.push('/barang')
            } else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }


    render() {
        return (
            <Container>
                <h2> Data Barang</h2>
                <Alert color="info" style={{ display: this.state.display }}>
                    {this.state.response}
                </Alert>
                <NavLink href="/barang/tambah"><Button color="info">Tambah Data</Button></NavLink>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Kode Barang</th>
                            <th>Merek</th>
                            <th>Nama Barang</th>
                            <th>Stok</th>
                            <th>Harga Persatuan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.barang.map(barang =>
                            <tr key={barang.id_barang}>
                                <td>{barang.kode_barang}</td>
                                <td>{barang.merek}</td>
                                <td>{barang.nama_barang}</td>
                                <td>{barang.stok}</td>
                                <td>{barang.harga_persatuan}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/barang/edit',
                                                state: {
                                                    id_barang: barang.id_barang,
                                                    kode_barang: barang.kode_barang,
                                                    merek: barang.merek,
                                                    nama_barang: barang.nama_barang,
                                                    stok: barang.stok,
                                                    harga_persatuan: barang.harga_persatuan
                                                }
                                            }
                                        }>
                                        <Button> Edit </Button>
                                       
                                    </Link>
                                    <span> </span>
                                        <Button onClick={() => this.Deletebarang(barang.id_barang)} color="danger"> Hapus </Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default ListComp