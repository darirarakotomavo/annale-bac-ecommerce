export default function OrderSteps() {
    const steps = [
        {
            id: 1,
            title: 'Choisissez votre produit',
            description: 'Parcourez notre catalogue et sélectionnez celui qui vous intéresse.',
        },
        {
            id: 2,
            title: 'Contactez-nous sur WhatsApp',
            description: 'Cliquez sur "Commander" pour nous envoyer un message sur WhatsApp.',
        },
        {
            id: 3,
            title: 'Négociez le prix',
            description: 'Discutez du prix avec nous. Nous sommes ouverts à la négociation.',
        },
        {
            id: 4,
            title: 'Payez via Orange Money',
            description: 'Après accord, effectuez le paiement sur notre numéro Orange Money.',
        },
        {
            id: 5,
            title: 'Recevez vos fichiers',
            description: 'Nous vous envoyons les PDF ou vidéos par WhatsApp ou email.',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
                <div key={step.id} className="text-center p-6 bg-white rounded-xl shadow-md">
                    <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                        {step.id}
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.description}</p>
                </div>
            ))}
        </div>
    );
}