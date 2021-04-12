var assert = require('assert')
// var add =require('../add.js').add
// var mul =require('../add.js').mul

import {add,mul} from '../add.js'

describe("add",function(){
    it('as',function(){
        assert.equal(add(1,2),3)
    })
    it('as',function(){
        assert.equal(mul(1,2),2)
    })
})
