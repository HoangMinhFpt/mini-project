import axios from "../axios";

const getHistoryBookingById = (userId, setToken) => {
  return axios.get(`/api/v1/Bookings/account/${userId}`, {
    headers: { "Authorization": `Bearer ${setToken}` }
  });
};

const bookingService = (data, setToken) => {
  return axios.post("/api/v1/Bookings", data, {
    headers: { "Authorization": `Bearer ${setToken}` }
  });
};

const cancelBookingService = (bookingId, token) => {
  return axios.patch(`/api/v1/Bookings/${bookingId}`, bookingId, {
    headers: { "Authorization": `Bearer ${token}` }
  });
};

export { getHistoryBookingById, bookingService, cancelBookingService };
