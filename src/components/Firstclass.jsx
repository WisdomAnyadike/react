/* eslint-disable react/no-unknown-property */
import { useState } from "react"


const Firstclass = () => {


    const [firstname, setvalue1] = useState('')
    const [secname, setvalue2] = useState('')


    const [users, setusers] = useState({})
    const [index, setindex] = useState("")




    let [obj, setobj] = useState([{ firstname: 'dave', secname: 'wiz' }, { firstname: 'dave', secname: 'wiz' }])






    const display = (o, i) => {
        setindex(i)
        console.log(i);
        console.log(o);
        setusers({ ...o })
        console.log(users);


    }



    const handlename = (e) => {
        console.log(e);
        setusers({ ...users, firstname: e.target.value })
        console.log(users);
    }

    const handlename2 = (e) => {
        console.log(e);
        setusers({ ...users, secname: e.target.value })
        console.log(users);
    }


    const add = () => {
        let newObj = {
            firstname,
            secname
        }

        setobj([...obj, newObj])
    }



    let save = () => {
        const updatedObj = [...obj];
        updatedObj[index] = users;
        console.log(updatedObj);
        setobj(updatedObj);
    }

    let del = (o, i) => {
        const updatedObj = [...obj];
        updatedObj.splice(i, 1)
        setobj(updatedObj)
    }

    return (
        <div id="one" className="bg-success">
            <input type="text" onChange={(e) => setvalue1(e.target.value)} />
            <input type="text" onChange={(e) => setvalue2(e.target.value)} />
            <button onClick={add}> add </button>
            <table>
                <thead>
                    <th> S/N </th>
                    <th> name</th>
                    <th> secname</th>

                </thead>
                <tbody>
                    {obj.map((o, i) =>

                        // eslint-disable-next-line react/jsx-key
                        <tr key={i}>
                            <td> {i + 1}  </td>
                            <td> {o.firstname} </td>
                            <td> {o.secname} </td>
                            <td>
                                <button onClick={() => display(o, i)} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Launch modal
                                </button>


                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <input value={users.firstname} onChange={(e) => handlename(e)} id="name1" type="text" />
                                                <input value={users.secname} onChange={(e) => handlename2(e)} id="name2" type="text" />

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary" onClick={() => save()}>Understood</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> </td>
                            <td>  <button onClick={() => del(o, i)} >  delete</button>  </td>
                        </tr>



                    )}



                </tbody>




            </table>








        </div>
    )
}

export default Firstclass