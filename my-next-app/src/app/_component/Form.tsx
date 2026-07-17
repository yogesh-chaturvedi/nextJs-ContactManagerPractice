"use client"

import Input from './Input'
import AuthButton from './AuthButton'
import { useForm } from "react-hook-form"
import { LoginAction } from '../actions/Auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginInputs, LoginSchema } from '../schemas/authSchemas'


const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>({
        resolver: zodResolver(LoginSchema)
    })

    const onSubmit = async (data: LoginInputs) => {
        await LoginAction(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="border-2 border-gray-500 p-5 bg-gray-900 rounded-xl">

            <Input
                type="email"
                label="Email"
                placeholder="Enter email"
                errors={errors.email}
                register={register("email")}
            />

            <Input
                type="password"
                label="Password"
                placeholder="Enter Password"
                errors={errors.password}
                register={register("password")}
            />

            <AuthButton text="Submit" type="submit" />
        </form>
    )
}

export default Form
