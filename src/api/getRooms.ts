import { Room } from "@/types";


const rooms: Room[] = [
    {
        "room_id": 1,
        "room_name": "Normal",
        "room_details": "<p>test</p>",
        "room_keyword": "VIP",
        "room_photo": "1767865616_695f7d1010c19.webp",
        "capacity": 2,
        "price": "5000.00",
        "status": "Published",
        "room_CreateBy": 1299,
        "room_createDate": "2026-01-08 09:46:56"
    },
    {
        "room_id": 2,
        "room_name": "VIP",
        "room_details": "<p>test</p>",
        "room_keyword": "VIP",
        "room_photo": "1767865616_695f7d1010c19.webp",
        "capacity": 2,
        "price": "8000.00",
        "status": "Published",
        "room_CreateBy": 1299,
        "room_createDate": "2026-01-08 09:46:56"
    }
];

export const getRooms = async (): Promise<Room[]> => {
  // Simulate a network request
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return rooms;
};
