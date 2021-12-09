import { createContext } from 'react'
import { IFormInstanceAPI } from '../../../types/form'

const FormContext = createContext<IFormInstanceAPI>(null as any)

export default FormContext
