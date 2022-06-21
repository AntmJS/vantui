import { createContext } from 'react'
import { IFormInstanceAPI } from '../../../types/form'

const FormContext = createContext<IFormInstanceAPI>({} as IFormInstanceAPI)

export default FormContext
