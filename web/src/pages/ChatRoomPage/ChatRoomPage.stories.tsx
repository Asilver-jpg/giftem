import type { Meta, StoryObj } from '@storybook/react'

import ChatRoomPage from './ChatRoomPage'

const meta: Meta<typeof ChatRoomPage> = {
  component: ChatRoomPage,
}

export default meta

type Story = StoryObj<typeof ChatRoomPage>

export const Primary: Story = {}
