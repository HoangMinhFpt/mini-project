import axios from "../axios";

const getHistoryBookingById = (userId, setToken) => {
  return axios.get(`/api/v1/Bookings/account/${userId}`, {
    headers: { Authorization: `Bearer ${setToken}` },
  });
};

const bookingService = (data, setToken) => {
  return axios.post("/api/v1/Bookings", data, {
    headers: { Authorization: `Bearer ${setToken}` },
  });
};
const cancelBookingService = (bookingId, setToken) => {
  return axios.get(`/api/v1/Bookings/${bookingId}`, {
    headers: { Authorization: `Bearer ${setToken}` },
  });
};

export { getHistoryBookingById, bookingService, cancelBookingService };
