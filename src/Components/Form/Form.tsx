interface Props {
	title?: string;
    submitText?: string;
    children: React.ReactNode;
}

export const Form : React.FC<Props> = ({ title, submitText, children }) => {
    return (
        <form action="{action}" className="flex flex-col items-center justify-center gap-7">
            <h1 className="text-4xl font-bold font-heading text-black text-center">
                {title}
            </h1>
            <div className="grid grid-cols-1 gap-2">
                {children}
                <a type="submit" className="btn-green font-handwritten">
                    {submitText}
                </a>
            </div>
        </form>
    );
};