const myFirstContract = artifacts.require("myFirstContract");

contract('myFirstContract', accounts => {
    beforeEach(async () =>{
        console.log('Before each')
        myFC = await myFirstContract.new()
    })

    describe('function set and get test', ()=>{
        it('set the stored data', async()=>{
            console.log('set data');
            await myFC.set(100)
            console.log('get data');
            let retVal = await myFC.get()
            console.log(`return value: ${retVal}`);

            assert.equal(retVal, 100);
        })
    })
})