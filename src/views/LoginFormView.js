import { useDispatch } from 'react-redux';
import { useState } from 'react';
import authOperetions from '../redux/auth/authOperation';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';

const styles = {
    form: {
        maxWidth: 500,
        margin: 10,

    },
};

const LoginFormView = () => {
    const dispath = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const chandleChange = ({target: {name, value}}) => {
        switch(name){
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const chandleSubmit = (element) => {
        element.preventDefault();
        dispath(authOperetions.logIn({email, password}))
        setEmail('');
        setPassword('');
    }

    return(
        <>
        <h1>Увійти</h1>
        <Form onSubmit={chandleSubmit} style={styles.form}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Введіть email</Form.Label>
                <Form.Control 
                name="email"
                value={email}
                onChange={chandleChange}
                type="email"
                placeholder="Введіть email" />
                <Form.Text className="text-muted">
                Ми ніколи нікому не поділимося вашою електронною поштою.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control 
                name="password"
                value={password}
                onChange={chandleChange}
                type="password" 
                placeholder="Пароль" />
            </Form.Group>
            <Button variant="success" type="submit">
                Увійти
            </Button>
        </Form>
        </>
    )
};

export default LoginFormView;