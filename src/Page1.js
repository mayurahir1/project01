import React from 'react'
import Table from 'react-bootstrap/Table';
export default function Page1() {
    return (



        <div className='container mt-5'>
            <div className='text-center'>
                <h1>TABLE</h1>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <Table striped bordered hover style={{ width: '350px' }}>
                    <thead>
                        <tr className='text-center' >

                            <th>email</th>
                            <th>password</th>
                            <th>textarea</th>
                        </tr>
                    </thead>
                    <tbody>



                    </tbody>
                </Table>
            </div>

        </div>
    )
}
