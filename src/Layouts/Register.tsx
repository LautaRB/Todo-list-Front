import { Footer } from '@components/Footer/Footer';

interface Props {
    children: React.ReactNode;
}

export const Register: React.FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen">
            <main className="flex-grow container mx-auto px-4 py-8 z-0">
                <div className="background-main fixed inset-0 -z-10"></div>
                {children}
            </main>

            <Footer />
        </div>
    );
};