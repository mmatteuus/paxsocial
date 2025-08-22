import { plansData } from '../../data/plans';
import { companyData } from '../../data/company';
import Card from '../ui/Card';
import Button from '../ui/Button';

const PlansSection = () => {
  return (
    <section id="planos" className="max-w-6xl mx-auto px-4 py-14" aria-labelledby="plans-title">
      <h2 id="plans-title" className="text-2xl md:text-3xl font-bold">Planos de assistência</h2>
      <p className="text-gray-600 mt-2">Exemplo de composição. Ajuste conforme a política comercial.</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {plansData.map((plan) => (
          <Card key={plan.id} className="p-6">
            <h3 className="text-xl font-semibold">Plano {plan.name}</h3>
            <p className="text-3xl font-bold mt-1">{plan.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700" role="list">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg 
                    className={`w-4 h-4 text-${plan.color} mt-0.5 flex-shrink-0`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              as="a"
              href={companyData.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 w-full"
              aria-label={`Saber mais sobre o Plano ${plan.name}`}
            >
              Quero saber mais
            </Button>
          </Card>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3">
        *Coberturas e distâncias são exemplos. Validar no contrato.
      </p>
    </section>
  );
};

export default PlansSection;

