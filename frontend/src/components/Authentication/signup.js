import { useState } from 'react';
import axios from 'axios';
export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSeller, setIsSeller] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('name', name);
        console.log('email', email);
        console.log('password', password);
        console.log('isSeller', isSeller);
        if(name === '' || email === '' || password === ''){
            alert('Please enter name, email and password');
            return;
        }
        axios.post('http://10.21.211.213:8080/signup', {
            name: name,
            email: email,
            password: password,
            isSeller: isSeller
        }).then((response) => {
            if(response.data.message==='Signup successful'){
                alert('Signup successful');
            }else{
                alert('Signup failed');
            }
        }
        );
    };
    return(
        <div>
            <h1>SignIn</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </label>
                <label>
                    Is Seller:
                    <input type="checkbox" value={isSeller} onChange={(e)=>setIsSeller(e.target.checked)} />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    )

}