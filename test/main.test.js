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
});
