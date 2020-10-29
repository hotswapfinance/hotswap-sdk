import { INIT_CODE_HASH } from '../src/constants'



describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
       it('matches computed bytecode hash', () => {
      expect(INIT_CODE_HASH).toEqual('0xa244a689f9cc52009feccdbb198f0e16849b521b29150178986beab40ca0b0a5')
    })
  })
})
