import { createStore, atom, use } from 'jotai'
import { atomWithStorage} from 'jotai/utils'

const store = createStore()

export const jwt_token = atomWithStorage('token', '')
export const tokenData = atom({})

export default store;