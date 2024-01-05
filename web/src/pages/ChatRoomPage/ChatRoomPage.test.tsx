import { render } from '@redwoodjs/testing/web'

import ChatRoomPage from './ChatRoomPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ChatRoomPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChatRoomPage />)
    }).not.toThrow()
  })
})
