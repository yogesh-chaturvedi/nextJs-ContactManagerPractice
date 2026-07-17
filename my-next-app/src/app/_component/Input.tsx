
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

interface InputInterface {
    type: string
    label: string;
    register: UseFormRegisterReturn
    errors?: FieldError
    placeholder: string
}


const Input = ({ type, label, register, errors, placeholder }: InputInterface) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300 mb-1">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register}
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors && (
                <p className='text-red-400 text-xs mt-1'>{errors.message as string}</p>
            )}
        </div>
    )
}

export default Input
