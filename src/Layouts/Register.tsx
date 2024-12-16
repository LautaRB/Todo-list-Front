interface Props {
    children: React.ReactNode;
}

export const Register: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <div className="background-register fixed inset-0 -z-10"></div>
            <main className="flex-grow container mx-auto z-0">{children}</main>
        </div>
    );
}