/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: RoomListSubscription
// ====================================================

export interface RoomListSubscription_roomChange_room_members_user {
  __typename: "User";
  avatar: string;
  username: string;
}

export interface RoomListSubscription_roomChange_room_members {
  __typename: "Member";
  user: RoomListSubscription_roomChange_room_members_user;
}

export interface RoomListSubscription_roomChange_room {
  __typename: "Room";
  id: number;
  name: string;
  members: RoomListSubscription_roomChange_room_members[];
}

export interface RoomListSubscription_roomChange {
  __typename: "RoomChangePayload";
  event: string;
  room: RoomListSubscription_roomChange_room;
}

export interface RoomListSubscription {
  roomChange: RoomListSubscription_roomChange;
}
