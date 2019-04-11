const Trello = require('../main');

describe('Trello', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    const trello = new Trello('apiKey', 'apiToken');

    describe('#createQuery()', () => {
        it('should return the trello key and token', () => {
            expect(trello.createQuery()).toEqual({
                key: 'apiKey',
                token: 'apiToken',
            });
        });
    });

    describe('#constructRequest()', () => {
        beforeEach(() => {
            jest.clearAllMocks();
        });

        var baseUrl = 'https://api.trello.com';
        var queryString = '?key=apiKey&token=apiToken';

        it('should throw an error because the request method is unsupported', () => {
            expect(() => {
                trello.constructRequest('/path', 'GIT');
            }).toThrow(
                new Error(
                    'Unsupported method. Pass one of these methods: POST, GET, PUT, DELETE.'
                )
            );
        });

        it('should return a GET query url', () => {
            expect(trello.constructRequest('/path', 'GET')).toEqual({
                url: `https://api.trello.com/path?key=apiKey&token=apiToken`,
            });
        });

        it('should return a GET query url with additional query information', () => {
            expect(
                trello.constructRequest(
                    '/path',
                    'GET',
                    ['name', 'id'],
                    'fields'
                )
            ).toEqual({
                url: `https://api.trello.com/path?key=apiKey&token=apiToken&fields=name,id`,
            });
        });

        it('should return a GET query url with additional query information', () => {
            expect(
                trello.constructRequest('/path', 'GET', {
                    name: 'name',
                    id: 'id',
                })
            ).toEqual({
                url: `https://api.trello.com/path?key=apiKey&token=apiToken&name=name&id=id`,
            });
        });

        it('should return an object to handle a deleteWebhook request', () => {
            expect(trello.constructRequest('/path/webhook/', 'DELETE')).toEqual(
                {
                    url: `https://api.trello.com/path/webhook/`,
                    data: { key: 'apiKey', token: 'apiToken' },
                    method: 'DELETE',
                }
            );
        });
    });
});
