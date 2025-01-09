interface FormActionProps {
    handleSubmit: any;
    type?: 'Button' | 'Other';
    action?: 'submit' | 'button';
    text: string;
}

export default function FormAction({
                                       handleSubmit,
                                       type = 'Button',
                                       action = 'submit',
                                       text
                                   }: FormActionProps) {
    return (
        <>
            {
                type === 'Button' ?
                    <button
                        type={action}
                        className="btn btn-inverse w-full"
                        onSubmit={handleSubmit}
                    >
                        {text}
                    </button>
                    :
                    <></>
            }
        </>
    )
}