import React, { useState, useEffect } from 'react';

import { consultarPlacaSinesp } from "./sinesp1";

const ConsultaPlaca: React.FC = () => {
    const [placa, setPlaca] = useState("");
    const [resultado, setResultado] = useState<any>(null);
    const [erro, setErro] = useState("");
    
        const consultarPlaca = async () => {
            try {
            const token = "7a8c396280509ae737a1907a2d092e68"; // substitua pelo seu token de acesso
            const resposta = await consultarPlacaSinesp(placa, token);
            setResultado(resposta);
            setErro("");
            } catch (error) {
            setResultado(null);
            setErro(error.message);
            }
        };

    //Construção do Timer
    const [time, setTime] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [unlockTime, setUnlockTime] = useState(0);

       

    useEffect(() => {
        let intervalId: any = null;

        if (clicked && !buttonDisabled) {
        intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 10);
        }, 10);
        
        }

        return () => clearInterval(intervalId);
    }, [clicked, buttonDisabled]);

    const handleClick = () => {
        setClicked(true);
        setButtonDisabled(true);
        setUnlockTime(Date.now() + 3000000);
    
        
    };
 

    useEffect(() => {
        if (buttonDisabled) {
        const intervalId = setInterval(() => {
            const timeLeft = Math.round((unlockTime - Date.now()) / 1000);
            if (timeLeft <= 0) {
            setButtonDisabled(false);
            setUnlockTime(0);
            clearInterval(intervalId);
            } else {
            setTime(timeLeft * 1000);
            }
        }, 10);
        return () => clearInterval(intervalId);
        }
    }, [buttonDisabled, unlockTime]);

    function handleBoth() {
        handleClick();
        consultarPlaca();
      }


  return (
    
    <div className='py-16'>
        <input
            type="text"
            value={placa}
            onChange={(event) => setPlaca(event.target.value)}
            className="text-gray-600 m-2"
            
        />
        
        <button
            onClick={handleBoth}
            disabled={buttonDisabled}
            className=" m-2"                                               
            >
            {buttonDisabled
                    ? `Botão bloqueado. Desbloqueia em ${Math.round(
                        (unlockTime - Date.now()) / 1000
                        )} segundos`
                    : 'Consultar Placa'}            
        </button>
      

   
      
      
      {resultado && (
        <div className='m-2'>
            <h2>Resultado da consulta:</h2>
            <p>Marca: {resultado.MARCA}</p>
            <p>Modelo: {resultado.MODELO}</p>
            <p>Cor: {resultado.cor}</p>
            <p>Ano: {resultado.ano}</p>
            <p>SUBMODELO: {resultado.SUBMODELO}</p>
            <p>Chassi: {resultado.VERSAO}</p>
            <p>anoModelo: {resultado.anoModelo}</p>
            <p>codigoSituacao: {resultado.codigoSituacao}</p>
            <p>data: {resultado.data}</p>
            <p>renavam: {resultado.renavam}</p>

            
            <div >
                <h2 className='p-4 text-xl' >Resultado da EXTRA:</h2>

                <div className='m-2'>
                    <p>ano_fabricação: {resultado.extra.ano_fabricacao}</p>
                    <p>ano_modelo: {resultado.extra.ano_modelo}</p>
                    <p>caixa_cambio: {resultado.extra.caixa_cambio}</p>
                    <p>cap_maxima_tracao: {resultado.extra.cap_maxima_tracao}</p>
                    <p>carroceria: {resultado.extra.carroceria}</p>
                    <p>chassi: {resultado.extra.chassi}</p>
                    <p>cilindradas: {resultado.extra.cilindradas}</p>
                    <p>combustivel: {resultado.extra.combustivel}</p>
                    <p>di: {resultado.extra.di}</p>
                    <p>eixo_traseiro_dif: {resultado.extra.eixo_traseiro_dif}</p>
                    <p>eixos: {resultado.extra.eixos}</p>                
                    <p>especie: {resultado.extra.especie}</p>
                    <p>faturado: {resultado.extra.faturado}</p>
                    <p>grupo: {resultado.extra.grupo}</p>
                    <p>limite_restricao_trib: {resultado.extra.limite_restricao_trib}</p>
                    <p>linha: {resultado.extra.linha}</p>
                    <p>media_preco: {resultado.extra.media_preco}</p>
                    <p>modelo: {resultado.extra.modelo}</p>
                    <p>motor: {resultado.extra.motor}</p>
                    <p>municipio: {resultado.extra.municipio}</p>          
                    <p>nacionalidade: {resultado.extra.nacionalidade}</p>
                    <p>peso_bruto_total: {resultado.extra.peso_bruto_total}</p>
                    <p>placa: {resultado.extra.placa}</p>
                    <p>placa_modelo_antigo: {resultado.extra.placa_modelo_antigo}</p>
                    <p>placa_modelo_novo: {resultado.extra. placa_modelo_novo}</p>
                    <p>quantidade_passageiro: {resultado.extra.uantidade_passageiro}</p>
                    <p>registro_di: {resultado.extra.registro_di}</p>
                    <p>renavam: {resultado.extra.renavam}</p>
                    <p>restricao_1: {resultado.extra.restricao_1}</p>
                    <p>restricao_2: {resultado.extra.restricao_2}</p>
                    <p>restricao_3: {resultado.extra.restricao_3}</p>
                    <p>restricao_3: {resultado.extra.restricao_3}</p> 
                    <p>especie: {resultado.extra.especie}</p>
                    <p>segmento: {resultado.extra.segmento}</p>
                    <p>situacao_chassi: {resultado.extra.situacao_chassi}</p>
                    <p>situacao_veiculo: {resultado.extra.situacao_veiculo}</p>
                    <p>sub_segmento: {resultado.extra.sub_segmento}</p>
                    <p>terceiro_eixo: {resultado.extra.terceiro_eixo}</p>
                    <p>tipo_carroceria: {resultado.extra.tipo_carroceria}</p>
                    <p>tipo_doc_faturado: {resultado.extra.tipo_doc_faturado}</p>
                    <p>tipo_doc_importadora: {resultado.extra.tipo_doc_importadora}</p>
                    <p>tipo_doc_prop: {resultado.extra.tipo_doc_prop}</p>
                    <p>tipo_montagem: {resultado.extra.tipo_montagem}</p>
                    <p>tipo_veiculo: {resultado.extra.tipo_veiculo}</p>
                    <p>uf: {resultado.extra.uf}</p>
                    <p>uf_placa: {resultado.extra.uf_placa}</p>
                    <p>unidade_local_srf: {resultado.extra.unidade_local_srf}</p>                  
                </div>

            </div>         
        </div>
      )}
      {erro && <p>{erro}</p>}
    </div>
  );
};

export default ConsultaPlaca;
