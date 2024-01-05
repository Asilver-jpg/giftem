import { useDispatch } from 'react-redux'

import { navigate, routes } from '@redwoodjs/router'

import { setLogIn } from 'src/redux'

export const authenticate = () => {
  const dispatch = useDispatch()
  dispatch(setLogIn(true))
  navigate(routes.lists())
}
