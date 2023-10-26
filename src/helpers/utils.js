export const API_ROOT =
  import.meta.env.VITE_API_ROOT || 'http://127.0.0.1:4001/api/v1'

export const APIUrls = {
  login: () => `${API_ROOT}/users/login`,
  authenticateUser: () => `${API_ROOT}/users/authenticate-user`,
  register: () => `${API_ROOT}/users/register`,
  fetchAllQrs: () => `${API_ROOT}/qrcodes`,
  createQr: (content) => `${API_ROOT}/qrcodes/create?qrContent=${content}`,
  deleteQr: (qrId) => `${API_ROOT}/qrcodes/delete/${qrId}`,
}
