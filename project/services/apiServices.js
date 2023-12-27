import http from "./httpService";

// course structure apis
export function getWorkshopBatchInfo(id) {
  return http.get(`/api/workshop/${id}/batch`);
}

export function initiatePayment(data) {
  return http.post(`/api/payment/initiate`, data);
}

export function addUser(data) {
  return http.post(`/api/payment/add-user`, data);
}

export function getOrderDetail(id) {
  return http.get(`/api/order/${id}/success`);
}
