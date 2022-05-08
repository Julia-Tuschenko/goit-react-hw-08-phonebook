import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/authOperation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    form: {
        maxWidth: 500,
        margin: 10,

    },
};

const RegisterFormView = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({target: {name, value}}) => {
        switch(name){
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    }; 

    return(
        <>
        <h1>Сторінка реєстрації</h1>

        <Form onSubmit={handleSubmit} style={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label>Логін</Form.Label>
                <Form.Control 
                name='name'
                value={name}
                onChange={handleChange}
                type="text" 
                placeholder="Введіть логін" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Пошта</Form.Label>
                <Form.Control 
                name='email'
                value={email}
                onChange={handleChange}
                type="email" 
                placeholder="Введіть пошту" />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control 
                name='password'
                value={password}
                onChange={handleChange}
                type="password" 
                placeholder="Введіть пароль" />
            </Form.Group>
            <Button variant="success" type="submit">
                Зареєструвати
            </Button>
        </Form>
        </>
    )
};

export default RegisterFormView;