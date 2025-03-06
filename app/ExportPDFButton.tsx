'use client'

import { useRef } from 'react'
import html2pdf from 'html2pdf.js'

export default function ExportPDFButton({ children }: { children: React.ReactNode }) {

    const contentRef = useRef<HTMLDivElement>(null)

    const handleDownload = () => {
        if (!contentRef.current) {
            console.log("deu ruim")
            return
        }

        // Definir as opções do PDF
        const options = {
            margin: 10, // Margem do PDF
            filename: 'pagina-documento.pdf',  // Nome do arquivo PDF
            image: { type: 'jpeg', quality: 0.98 }, // Configuração para imagens
            html2canvas: { scale: 2, useCORS: true }, // Captura de imagens com qualidade
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // Formato A4, orientação retrato
        }

        console.log("ta indo")
        // Gerar o PDF a partir do conteúdo da página
        html2pdf()
            .set(options)
            .from(contentRef.current)   // Captura o conteúdo renderizado
            .save()                     // Salva o PDF
    }

    return (
        <div>
            <div ref={contentRef}>
                {children}
            </div>

            {/* Botão para gerar o PDF */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={handleDownload}>📄 Baixar PDF</button>
            </div>
        </div>
    )
}
