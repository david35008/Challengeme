module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('challenges', 'state', {
      type: Sequelize.DataTypes.ENUM,
      values: ['pending', 'denied', 'approved'],
      defaultValue: 'pending',
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('challenges', 'state');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
