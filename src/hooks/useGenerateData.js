import { faker } from '@faker-js/faker'; 
import _ from 'lodash';

export function useGenerateData() {
  function generateItem() {
    return {
      id: faker.string.uuid(),
      modificationDate: faker.date.recent().getTime(),
      userName: faker.person.fullName(),
      name: _.capitalize(faker.lorem.words(3)),
      description: faker.lorem.lines({ min: 3, max: 5 }),
      iconClass: faker.helpers.arrayElement(['admin', 'user', 'guest']),
      image: faker.helpers.arrayElement(['mapLyon.png', null])
    };
  }

  function generateMultipleItems(count = 10) {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push(generateItem());
    }
    return data;
  }

  function generateSingleItem() {
    return generateItem();
  }

  return {
    generateMultipleItems,
    generateSingleItem
  };
}