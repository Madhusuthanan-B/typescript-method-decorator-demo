import { OutlierReporter } from './outlier.decorator';

type AnimalCategory = 'domestic' | 'wild';

interface IAnimal {
  name: string;
  category: AnimalCategory;
}

class Animal {
  @OutlierReporter({ outlier: 'wild' })
  sayName(name: string, category: AnimalCategory) {
    return name;
  }
}

const animals: IAnimal[] = [
  {
    name: 'cat',
    category: 'domestic'
  },
  {
    name: 'dog',
    category: 'domestic'
  },
  {
    name: 'Tiger',
    category: 'wild'
  },
  {
    name: 'Cow',
    category: 'domestic'
  },
  {
    name: 'Lion',
    category: 'wild'
  }
];

animals.forEach(animal => {
  console.log(new Animal().sayName(animal.name, animal.category));
});

type DefinedRegions =
  | 'arctic'
  | 'atlantic'
  | 'pacific'
  | 'south-china'
  | 'indian-ocean';

class Region {
  @OutlierReporter({ outlier: 'arctic' })
  processRegion(region: DefinedRegions) {
    return `Processing...  ${region}`;
  }
}

const availableRegions: DefinedRegions[] = [
  'atlantic',
  'pacific',
  'indian-ocean',
  'arctic'
];

availableRegions.forEach(r => {
  console.log(new Region().processRegion(r));
});
