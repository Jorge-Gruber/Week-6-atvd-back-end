'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Tags', 'produtoId', {
          type: Sequelize.INTEGER,
          references: {
              model: 'Produtos',
              key: 'id'
          },
          onDelete: 'SET NULL'
      })
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Tags', 'produtoId')
  }
};
