const {
  constructRequest,
  handleMultipleParams,
  makeRequest,
} = require('../helpers');

const renameList = (listId, name, key, token) => {
  const request = constructRequest(
    `/1/lists/${listId}/name`,
    'PUT',
    key,
    token,
    {
      value: name,
    }
  );

  return makeRequest(request.url, request.data, request.method);
};

const getCardsForList = (listId, key, token) => {
  const request = constructRequest(`/1/lists/${listId}`, 'GET', key, token);
  return makeRequest(request.url);
};

const getCardsOnList = (listId, key, token) => {
  const request = constructRequest(
    `/1/lists/${listId}/cards`,
    'GET',
    key,
    token
  );
  return makeRequest(request.url);
};

const getCardsOnListWithExtraParamsconst = (listId, fields, key, token) => {
  // e.g. trello.getCardsOnList('5c8a3b4eb42f42133e1ea998', ['id', 'name', 'badges']);
  const request = constructRequest(
    `/1/lists/${listId}/cards`,
    'GET',
    key,
    token,
    fields,
    'fields'
  );

  return makeRequest(request.url);
};

module.exports = {
  renameList,
  getCardsForList,
  getCardsOnList,
  getCardsOnListWithExtraParams,
};
