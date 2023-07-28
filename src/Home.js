import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


let array = []
export default function Home() {

    const submit = () => {

        for (let index = 0; index < array.length; index++) {
            let tr = document.createElement(tr)


            let td1 = document.createElement('td')
            let td2 = document.createElement('td')
            let td3 = document.createElement('td')



            tr.appendchild(td1)
            tr.appendchild(td2)
            tr.appendchild(td3)


        }


        let data = {}
        let subdata = false
        for (let i = 0; i < array.length; i++) {
            if (array[i].email == document.getElementById('email').value) {
                subdata = true
            }

        }
        if (subdata) {
            alert('email already registered')
        } else {
            data = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                textarea: document.getElementById('textarea').value






            }
            array.push(data)
        }

        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        textarea: document.getElementById('textarea').value = ''



        console.log(array)
        localStorage.setItem('data', JSON.stringify(array))
    }

    return (
        <div className='container'>
            <h1 className='text-center mt-5'>FORM</h1>
            <div className=' d-flex justify-content-center mt-5'>




                <Form>
                    <Form.Group className="mb-3" style={{ width: '350px' }} controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" id='email' placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" style={{ width: '350px' }} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" id='password' placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">

                    </Form.Group>


                    <Form.Group className="mb-3" style={{ width: '350px' }} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" id='textarea' rows={3} />
                    </Form.Group>
                    <Button onClick={submit} variant="primary" style={{ width: '350px' }} >
                        Submit
                    </Button>
                </Form>
            </div >
        </div>
    )
}
