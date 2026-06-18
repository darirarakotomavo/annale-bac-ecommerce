import { orderSteps } from '@/app/data/products';

export default function OrderSteps() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {orderSteps.map((step) => (
                <div key={step.id} className="text-center p-4">
                    <div className="w-12 h-12 bg-slate-800 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">
                        {step.id}
                    </div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.description}</p>
                </div>
            ))}
        </div>
    );
}