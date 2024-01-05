import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ChatRoomPage = () => {
  return (
    <>
      <MetaTags title="ChatRoom" description="ChatRoom page" />

      <h1>ChatRoomPage</h1>
      <p>
        Find me in <code>./web/src/pages/ChatRoomPage/ChatRoomPage.tsx</code>
      </p>
      <p>
        My default route is named <code>chatRoom</code>, link to me with `
        <Link to={routes.chatRoom()}>ChatRoom</Link>`
      </p>
    </>
  )
}

export default ChatRoomPage
