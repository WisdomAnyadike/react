import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon,

}
    from 'mdb-react-ui-kit';
    import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Signup() {

const navigate = useNavigate()

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [obj, setObj] = useState({firstname,lastname,email,password})
    const [arr, setArr] = useState([])

 const handleEmail = (e)=> {
    setEmail(e.target.value)
    setObj({...obj , email:e.target.value})

 }


 const handlePassword = (e)=> {
    setPassword(e.target.value)
    setObj({...obj , password:e.target.value})

 }

 const handleFirstname = (e)=> {
    setFirstname(e.target.value)
    setObj({...obj , firstname:e.target.value})

 }

 const handleLastname = (e)=> {
    setLastname(e.target.value)
    setObj({...obj , lastname:e.target.value})
  

 }






    const handleAdd = async () => {
        const emailInput = /^\w+[@]{1}[A-Za-z]+[.]{1}[a-zA-Z]+$/
        const passwordInput = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#_])[A-Za-z0-9@#_]{8,}/

        if (firstname == '' || lastname == '' || email == '' || password == '') {
            alert('a field is empty')
        }
        else if (emailInput.test(email) == false) {
            alert('Invalid email format')
            return
        }
        else if (passwordInput.test(password) == false) {
            alert('Password should be at least 8 characters, including special characters, lower & uppercase letters')
            return
        }
        else {
         

            setObj({...obj} )



            setArr([...arr, obj])
            localStorage.setItem('reactsignupArr', JSON.stringify(arr))
            navigate('/login')

        }

     
    }
    let [type, setType] = useState('password')
    const showorhide = () => {
        type == 'password' ? setType('text') : setType('password')
    }

    return (
        <MDBContainer fluid className='p-4'>

            <MDBRow>

                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

                    <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                        The best offer <br />
                        <span className="text-primary">for your business</span>
                    </h1>

                    <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>

                </MDBCol>

                <MDBCol md='6'>

                    <MDBCard className='my-5'>
                        <MDBCardBody className='p-5'>

                            <MDBRow>
                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' onChange={(e) => handleFirstname(e)} label='First name' type='text' />
                                </MDBCol>

                                <MDBCol col='6'>
                                    <MDBInput wrapperClass='mb-4' onChange={(e) => handleLastname(e)} label='Last name' type='text' />
                                </MDBCol>
                            </MDBRow>

                            <MDBInput wrapperClass='mb-4' onInput={(e) => handleEmail(e)} label='Email' type='email' />

                            <MDBContainer className='d-flex border p-1 rounded align-items-center justify-content-between' wrapperClass=' w-100' >  <MDBInput wrapperClass='w-75' className='border-0' onInput={(e) => handlePassword(e)} type={type} /> <button onClick={showorhide} className='h-50 border-0 bg-light rounded' style={{ width: '50px' }} > &  </button> </MDBContainer>
                            <span className='d-block mb-4'> Password </span>


                            <div className='d-flex justify-content-center mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                          <MDBBtn className='w-100 mb-4' type='button' onClick={handleAdd} size='md'>sign up</MDBBtn>  

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>

                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default Signup;