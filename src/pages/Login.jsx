import React, { useState } from 'react'
import './Login.css'

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que los campos no estén vacíos
        if (!username || !password) {
            setError('Por favor, completa ambos campos');
            return;
        }

        console.log(username, password)

        // Procesar el inicio de sesión (aquí puedes agregar tu lógica de autenticación)
        console.log('Inicio de sesión exitoso');
        setError(''); // Limpiar errores si la validación pasa
    };

    return (
        <>
            <div className='login-form'>
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Usuario:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>
        </>
    )
}

export default Login
