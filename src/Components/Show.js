import React from 'react'

function Show({ Data }) {
    return (
        <>
            <div className="container my-3">
                <div className="row">
                    {

                        Data.map((value ,index) => {
                            return (
                                <div className="col-4" key={index}>
                                    <h6>Email:{value.email}</h6>
                                    <h6>Pass:{value.password}</h6>
                                    <h6>City:{value.city}</h6>
                                    <h6>Zip:{value.zip}</h6>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Show