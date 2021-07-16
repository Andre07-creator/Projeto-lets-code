import React,{useState} from 'react';

export default function App(){

  const [nome, setNome] = useState('');

  return (
    <>
      <input type='text' onChange={(evt) => setNome(evt.target.value)} value={nome} />
      <h1>{nome}</h1>
    </>
  );
}
