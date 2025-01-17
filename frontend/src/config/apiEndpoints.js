const BASE_URL =  "http://localhost:8000/api/v1";


const apiEndpoints = {
  login: `${BASE_URL}/auth/login`,
  categories: `${BASE_URL}/admin/category`,
  brands: `${BASE_URL}/admin/brand`,
  products: `${BASE_URL}/admin/product`,
  orders: `${BASE_URL}/admin/order`,
  shipments: `${BASE_URL}/admin/shipment`,


};

export default apiEndpoints;