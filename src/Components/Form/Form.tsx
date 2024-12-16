export const Form = () => {
    return (
        <form action="{action}" className="flex flex-col items-center justify-center gap-7">
            <h1 className="text-4xl font-bold font-heading text-black text-center">
                Registro
            </h1>
            <div className="grid grid-cols-1 gap-2">
                <input type="text" placeholder="Nombre de Usuario" required />
                <input type="password" placeholder="Contraseña" required />
                <input type="text" placeholder="Email" required />

                <a href="#" className="btn-green font-handwritten">
                    Registrarse
                </a>
            </div>
        </form>
    );
};