import React, { useState, useEffect } from 'react';
import './Table.css';
import axios from 'axios'


function Table() {

    const [data, showData] = useState([])

    const getData = async () => {
        try {
            const result = await axios.get('http://167.172.242.107:8282/ps/assesments')
            showData(result.data)
            console.log(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://167.172.242.107:8282/ps/assesments/${id}`);
            getData()
        } catch (error) {
            
        }
   }



    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <div className='row tablerow'>
                <div className='col-lg-12 col-md-12 mt-3'>
                    <div className='table-responsive'>
                        <table className='table align-items-center table-flush'>
                            <thead className='thead-light'>
                                <tr>
                                    <th scope='col'>No:</th>
                                    <th scope='col'>Assignments</th>
                                    <th scope='col'>Weight</th>
                                    <th scope='col'>Marks</th>
                                    <th scope='col'>Due Date</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((currentValue, i) =>
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{currentValue.assId}</td>
                                        <td>{currentValue.weight}</td>
                                        <td>{currentValue.totalmarks}</td>
                                        <td>{currentValue.dueDate}</td>
                                        <td><button onClick={() => handleDelete(currentValue.assId)} className='btn btn-danger'>Delete</button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table