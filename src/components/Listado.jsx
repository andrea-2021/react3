import React from 'react';

const Listado = ({ colaboradores, searchValue, onDeleteColaborador }) => {
    // Filtra los colaboradores según el valor de búsqueda
    const filteredColaboradores = colaboradores.filter((colaborador) => {
        // Verifica si el valor de búsqueda está presente en cualquiera de los campos del colaborador
        return Object.values(colaborador).some((field) =>
            field.toString().toLowerCase().includes(searchValue.toLowerCase())
        );
    });

    return (
        <div className='wh-list'>
            <table className="table mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredColaboradores.map((colaborador) => (
                        <tr key={colaborador.email}>
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.email}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td>{colaborador.telefono}</td>
                            <td>
                                <button className='bg-danger p-1' onClick={() => onDeleteColaborador(colaborador.email)}>
                                    Borrar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listado;
