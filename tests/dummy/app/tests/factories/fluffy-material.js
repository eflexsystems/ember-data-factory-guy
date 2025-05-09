import FactoryGuy from '@eflexsystems/ember-data-factory-guy';

export default FactoryGuy.define('fluffy-material', {
  default: {
    name: 'fluffy material',
  },
  feathers: {
    name: 'feathers',
  },
  traits: {
    belonging_to_hat: {
      hat: FactoryGuy.belongsTo('small-hat'),
    },
  },
});
