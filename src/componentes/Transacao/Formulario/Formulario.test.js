import { render, screen } from '@testing-library/react'
import Formulario from './index'

describe('Deve renderizar um campo de input', () => {
    test('no documento', () => {
        render(<Formulario />)

        const campoTexto = screen.getByPlaceholderText('Digite um valor')

        expect(campoTexto).toBeInTheDocument()
    })
})
