
const { expect } = require('chai')
const Pkg = require('../lib/index')
const pkg = new Pkg()

describe('lib/index', () => {
    it('index', () => {
        const res = pkg.index()
        expect(res).to.be.equal(true)
    });
});