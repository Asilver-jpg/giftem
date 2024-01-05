import { useDispatch } from 'react-redux'

import { setLogIn } from 'src/redux'

export const logOut = () => {
  const dispatch = useDispatch()
  dispatch(setLogIn(false))
}
