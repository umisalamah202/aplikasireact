import React,{ useEffect, useState } from 'react'
import { Container,Table,Button } from 'reactstrap'
import axios from 'axios'

const api = 'http://localhost:3001'

function HooksUseEffects() {

    const [barang, setBarang] = useState([])

    useEffect(() => {
        console.log("Memanggil use effects")
        axios.get(api + '/tampil').then(res => {
            setBarang(res.data.values)
        })

    }, [])

    return (
        <Container>
            <h2> Data Barang</h2>
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
                    {barang.map(barang =>
                        <tr key={barang.id_barang}>
                            <td>{barang.kode_barang}</td>
                            <td>{barang.merek}</td>
                            <td>{barang.nama_barang}</td>
                            <td>{barang.stok}</td>
                            <td>{barang.harga_persatuan}</td>
                            <td>

                                <span> </span>
                                <Button color="danger"> Hapus </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>

    )
}

export default HooksUseEffects