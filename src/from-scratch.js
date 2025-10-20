const coolGreeting = (person) => {
  return person.isCool
    ? `What is UP ${String(person.name).toUpperCase()}? How you been doin'?`
    : `Greetings ${person.name}, how have you been lately?`;
};

const haveBirthday = (person) => {
  person.age += 1;
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name;
  person.spyHandle = spyHandle;
};

const carMaker = (name, maker, year) => {
  return {
    name,
    maker,
    year,
    needsOilChange: false,
  };
};

const weAreNotFriends = (person) => {
  return person.friends.pop();
};

const listHobbies = (person) => {
  for (const hobby of person.hobbies) {
    console.log(`${person.name} likes ${hobby}.`);
  }
};

const getNextOpponent = (team) => {
  const first = team.matches && team.matches[0];
  return first ? first.teamName : null;
};

const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (arr) => {
  if (!arr || arr.length === 0) return [];
  const keys = Object.keys(arr[0]);
  const matrix = [keys];
  for (const item of arr) {
    matrix.push(keys.map((k) => item[k]));
  }
  return matrix;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
