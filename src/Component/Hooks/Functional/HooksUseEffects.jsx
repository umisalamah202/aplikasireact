import React,{ useEffect, useState } from 'react'
import { Container,Table,Button } from 'reactstrap'
import axios from 'axios'

const api = 'http://localhost:3001'

function HooksUseEffects() {

    const [mahasiswa, setMahasiswa] = useState([])

    useEffect(() => {
        console.log("Memanggil use effects")
        axios.get(api + '/tampil').then(res => {
            setMahasiswa(res.data.values)
        })

    }, [])

    return (
        <Container>
            <h2> Data Mahasiswa</h2>
            <hr />
            <Table classname="table-bordered">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map(mahasiswa =>
                        <tr key={mahasiswa.id_mahasiswa}>
                            <td>{mahasiswa.nim}</td>
                            <td>{mahasiswa.nama}</td>
                            <td>{mahasiswa.jurusan}</td>
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