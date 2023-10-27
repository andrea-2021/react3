import React, { useState } from 'react'
import Alert from './Alert';

const Formulario = ({ guardarColaborador }) => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [edad, setEdad] = useState('');
    const [cargo, setCargo] = useState('');
    const [telefono, setTelefono] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleEdadColaborador = (event) => {
        setEdad(event.target.value);
    };

    const handleCargoColaborador = (event) => {
        setCargo(event.target.value);
    };
    const handleTelefonoColaborador = (event) => {
        setTelefono(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Formato de correo incorrecto.');
            return;
        }

        if (!edad) {
            setError('Por favor, ingresa la edad.');
            return;
        }

        if (!cargo) {
            setError('Por favor, ingresa el cargo.');
            return;
        }
        if (!telefono) {
            setError('Por favor, ingresa el teléfono.');
            return;
        }

        guardarColaborador({
            nombre,
            email,
            edad,
            cargo,
            telefono,
        });

        setSuccessMessage('Tu cuenta ha sido creada exitosamente.');

        setError('');
        setTimeout(() => {
            setSuccessMessage('');
            setNombre('');
            setEmail('');
            setCargo('');
            setEdad('');
            setTelefono('');
        }, 3000);
    };

    return (
        <div className='m-5 wh-form'>
            <h4 className='mb-3'>Agregar Colaborador</h4>
            <form className='d-flex flex-column gap-2' onSubmit={handleSubmit}>
                <input
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Nombre del colaborador'
                    value={nombre}
                    onChange={handleNombreChange}
                />
                <input
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Correo del colaborador'
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    className='form-control form-control-sm'
                    type='number'
                    placeholder='Edad del colaborador'
                    value={edad}
                    onChange={handleEdadColaborador}
                />
                <input
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Cargo del colaborador'
                    value={cargo}
                    onChange={handleCargoColaborador}
                />
                <input
                    className='form-control form-control-sm'
                    type='number'
                    placeholder='Teléfono del colaborador'
                    value={telefono}
                    onChange={handleTelefonoColaborador}
                />
                <button type='submit'>Crear cuenta</button>
            </form>
            {error && <div className='alert alert-danger mt-2'>{error}</div>}
            {successMessage && <Alert textAlert={successMessage} />}
        </div>
    )
}

export default Formulario