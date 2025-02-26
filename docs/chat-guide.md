# Chatting Guide

- Redux Action
- Chatting Components
- Chatting API

<br />

## Redux Action

### Create ChatRoom

```js
export const createChatRoom = (targetChatRoomInfo) => ({
  type: NEW_CHAT_ROOM,
  payload: targetChatRoomInfo,
});
```

<br />

### Leave ChatRoom

```js
export const leaveChatRoom = (targetChatRoomInfo) => ({
  type: LEAVE_CHAT_ROOM,
  payload: targetChatRoomInfo,
});
```

### Invite ChatRoom User

```js
export const InviteChatRoomUser = (targetChatRoomInfo) => ({
  type: INVIETE_CHAT_ROOM_USER,
  payload: targetChatRoomInfo,
});
```

<br />

### Send Message

```js
export const sendNewMessage = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});
```

<br />

### Receive Message

```js
export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  payload: message,
});
```

<br />
<br />

## Chatting Components

├── docs/ <br />
│ └── chat-guide.md <br />
├── src/ <br />
│ └── \_actions/ <br />
│ ├── \_reducers <br />
│ └── components/ <br />

<br />

### components

- Input
- Messages
- ChattingArea
