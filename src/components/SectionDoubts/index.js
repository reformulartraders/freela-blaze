import React from 'react'

import { Doubt } from './Doubt'

import './style.scss'

export function SectionDoubts() {
    return (
        <div className="sectionDoubts">
            <h1 className="titleCustom">Dúvidas frequentes</h1>
            <div className="contentSectionDoubts">
                <Doubt question="Quais são as formas de pagamento?" answer="O método META TAKE pode ser comprado através de PIX, débito, crédito e boleto." />
                <Doubt question="Em quanto tempo consigo ter resultados?" answer="A partir do momento que você se torna um membro seleto do META TAKE PREMIUM, os resultado aparecem em até 30 dias se você aplicar e seguir TODAS as recomendações do nosso método." />
                <Doubt question="Como vou receber acesso?" answer="Após a confirmação do pagamento o link e acesso do portal será enviado imediatamente." />
                <Doubt question="Por quanto tempo vou ter acesso ao método META TAKE?" answer="O acesso é vitalício." />
            </div>
        </div>
    )
}
