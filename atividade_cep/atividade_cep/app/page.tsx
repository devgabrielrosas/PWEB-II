'use client';
import { error } from "console";
import { useState } from 'react';


export default function Home() {

  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  
  async function pegar_cep(cep:Number) {
    const url = `https://viacep.com.br/ws/${cep}/json`;
    try {
      const resposta = await fetch(url);
      if (!resposta.ok){
        throw new Error(`Deu errado`);
      }
      const resultado = await resposta.json();
      setRua(resultado.logradouro);
      setRua(resultado.logradouro);
      setBairro(resultado.bairro);
      setEstado(resultado.uf);
      setCidade(resultado.localidade);
      return resultado;
    } catch (error) {
      console.error(error);
    }
  }

  const dados = pegar_cep(Number(cep));


  
  return (
    <div>
      <h1 className="text-7xl">Adress</h1>
      <form action="" className="flex flex-col gap-4 mt-4">
        <input type="text" name="cep" id="cep" className="bg-amber-50 text-amber-900 p-2 " value={cep} onChange={(e) => setCep(e.target.value)}/>
        <input type="text" name="rua" id="rua" className="bg-amber-50 text-amber-900 p-2" value={rua} onChange={(e) => setCep(e.target.value)}/>
        <input type="text" name="numero" id="numero" className="bg-amber-50 text-amber-900 p-2 " value={numero} onChange={(e) => setCep(e.target.value)}/>
        <input type="text" name="bairro" id="bairro" className="bg-amber-50 text-amber-900 p-2 "value={bairro} onChange={(e) => setCep(e.target.value)}/>
        <input type="text" name="estado" id="estado" className="bg-amber-50 text-amber-900 p-2 " value={estado} onChange={(e) => setCep(e.target.value)}/>
        <input type="text" name="cidade" id="cidade" className="bg-amber-50 text-amber-900 p-2 " value={cidade} onChange={(e) => setCep(e.target.value)}/>
      </form>
    </div>
  );
}
