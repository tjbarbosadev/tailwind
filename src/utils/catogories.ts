import foodSvg from '../assets/food.svg';
import othersSvg from '../assets/others.svg';
import servicesSg from '../assets/services.svg';
import transportSvg from '../assets/transport.svg';
import acoomodationSvg from '../assets/accommodation.svg';

export const CATEGORIES = {
  food: {
    name: 'Alimentação',
    icon: foodSvg,
  },
  transport: {
    name: 'Transporte',
    icon: transportSvg,
  },
  accommodation: {
    name: 'Hospedagem',
    icon: acoomodationSvg,
  },
  services: {
    name: 'Serviços',
    icon: servicesSg,
  },
  others: {
    name: 'Outros',
    icon: othersSvg,
  },
};

export const CATEORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
