import React from 'react'

const Alert = ({ textAlert }) => {
    return (
        <div className="cont-form my-5 bg-success text-white p-5 rounded">
            <div className='modal-form'>
                {textAlert}
            </div>

        </div>
    )
}

export default Alert