const knex = require('../db/config.js');

const getMemberId = userId => {
  return knex('Members').where({
    userID: userId
  }).then(id => {
    return id
  })
};
const getYearByLeagueId = leagueId => {
  return knex('Years').where({
    leagueID: leagueId
  }).then(year => {
    return year
  })
};

const getLeagueMembers = (userId, leagueInfo) => {
  leagueInfo = JSON.parse(leagueInfo);
  return getMemberId(userId).then(memberId => {
    console.log('MEMBER ID: ', memberId)
    return getYearByLeagueId(leagueInfo.id).then(year=> {
      year = year[year.length-1];
      return knex('Members').where({
        yearID: year.id
      }).then(members => {
        return members
      })
    })
  });
  // return Promise.all([getMembers]).then(members => {
  //   return members;
  // })
};

module.exports ={
  getMemberId,
  getLeagueMembers
};