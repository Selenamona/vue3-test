var faker = require("faker");
module.exports = function a() {
  faker.locale = "zh_CN";
  var _ = require("lodash");
  return {
    getList: _.times(10, function (n) {
      return {
        id: n,
        name: faker.name.findName(),
        avatar: faker.image.avatar(),
        carImg: faker.image.cats(),
        hot: faker.random.number(),
        description: faker.lorem.sentences()
      };
    })
  };
};
