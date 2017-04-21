const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'dynasty',
    port: 3306
  }, 
  useNullAsDefault: true
});

knex.schema.hasTable('Users').then(exists => {
  if(!exists) {
    knex.schema.createTable('Users', user => {
      user.increments('id').primary();
      user.string('username');
      user.string('password');
      user.string('email');
    }).then(table => {
      console.log('Created Users Table ', table);
    });
  }
});

knex.schema.hasTable('Leagues').then(exists => {
  if(!exists) {
    knex.schema.createTable('Leagues', league => {
      league.increments('id').primary();
      league.string('name');
    }).then(table => {
      console.log('Created Leagues Table ', table);
    });
  }
});

knex.schema.hasTable('Years').then(exists => {
  if(!exists) {
    knex.schema.createTable('Years', year => {
      year.increments('id').primary();
      year.string('year');
      year.integer('leagueID').unsigned();
      year.foreign('leagueID').references('Leagues.id');
    }).then(table => {
      console.log('Created Years Table ', table);
    })
  }
});

knex.schema.hasTable('Members').then(exists => {
  if(!exists) {
    knex.schema.createTable('Members', member => {
      member.increments('id').primary();
      member.string('name');
      member.integer('yearID').unsigned();
      member.integer('userID').unsigned();
      member.boolean('isComish');
      member.foreign('yearID').references('Years.id');
      member.foreign('userID').references('Users.id');
    }).then(table => {
      console.log('Created Members Table ', table);
    })
  }
});

knex.schema.hasTable('Teams').then(exists => {
  if(!exists) {
    knex.schema.createTable('Teams', team => {
      team.increments('id').primary();
      team.string('name');
      team.string('sport');
      team.integer('memberID').unsigned();
      team.foreign('memberID').references('Members.id');
    }).then(table => {
      console.log('Created Teams Table ', table);
    })
  }
});

knex.schema.hasTable('Trades').then(exists => {
  if(!exists) {
    knex.schema.createTable('Trades', trade => {
      trade.increments('id').primary();
      trade.string('players_team1');
      trade.integer('team1_ID').unsigned();
      trade.string('players_team2');
      trade.integer('team2_ID').unsigned();
      trade.integer('yearID').unsigned();
      trade.foreign('team1_ID').references('Teams.id');
      trade.foreign('team2_ID').references('Teams.id');
      trade.foreign('yearID').references('Years.id');
    }).then(table => {
      console.log('Created Trades Table ', table);
    })
  }
});

knex.schema.hasTable('Transactions').then(exists => {
  if(!exists) {
    knex.schema.createTable('Transactions', transaction => {
      transaction.increments('id').primary();
      transaction.string('playerAdded');
      transaction.string('PlayerDropped');
      transaction.integer('teamID').unsigned();
      transaction.foreign('teamID').references('Teams.id');
    }).then(table => {
      console.log('Create Transactions Table ', table);
    })
  }
})

module.exports = knex;