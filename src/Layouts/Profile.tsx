interface Props {
    children: React.ReactNode;
}

export const Profile: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen min-w-screen bg-white dark:bg-green-500">
            <main className="container mx-auto">{children}</main>
        </div>
    );
};