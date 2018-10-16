
exports.up = function(knex, Promise) {
	return Promise.all([
    knex.schema.table('milestones', function(table){
      table.primary('id').references('id').inTable('famous_people');
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('milestones', function(table){
      table.dropColumn('milestones_id_column');
    })
  ])
};
