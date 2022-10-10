import { apiClinet } from "./apiClient";

export async function getAllTours() {
  const res = await apiClinet.get(`/tours`);
  const data = await res.data;
  return data;
}

export async function getSingleTour(id) {
  const res = await apiClinet.get(`/tours/${id}`);
  const data = await res.data;
  return data;
}
