import {useState} from 'react';

const Input = () => {
    const [ email, setEmail ] = useState('');
    const [ text, setText] = useState('');
    const [ checked, setChecked] = useState(false);

    const onChangeText = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
        <input 
        type='text' onChange={(event) => {setEmail(event.target.value)}}
        value={email} 
        />
        <button onClick={() => setEmail('')} style={{backgroundColor: email}}>Clear</button>
        <textarea onChange={onChangeText} value={text}></textarea>

        <input 
        type='checkbox' onChange={(event) => {setChecked(event.target.checked)}}
        value={email} 
        />

        </div>
    )
}

export default Input;