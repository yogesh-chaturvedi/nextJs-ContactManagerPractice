

type AuthButtonTypes = "submit" | "button" | "reset";

interface AuthButtonInterface {
    text: string;
    type: AuthButtonTypes;
    onClick: () => void
}


const AuthButton = ({ text, type, onClick }: AuthButtonInterface) => {
    return (
        <button onClick={onClick} type={type} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">
            {text}
        </button>
    )
}

export default AuthButton
