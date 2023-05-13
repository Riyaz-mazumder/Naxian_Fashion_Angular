import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DatabaseServiceService {
  constructor(private http: HttpClient) {}

  private productUrl =
    'https://naxianfashion-931b6-default-rtdb.asia-southeast1.firebasedatabase.app/Products.json';

  // Products Table
  private url = 'http://localhost:8080/api/v1/products';


  searchProducts(data: string){
    return this.http.get("http://localhost:8080/api/v1/product/" + data)
  }

  addNewProduct(data: any) {
    return this.http.post(this.url, data);
  }

  getAllProducts() {
    return this.http.get(this.url);
  }

  getProductById(id: any) {
    return this.http.get(this.url + '/' + id);
  }

  editProduct(newData: any) {
    return this.http.put(this.url, newData);
  }

  deleteProduct(id: any) {
    return this.http.delete(this.url + '/' + id);
  }

  // Admin Table
  urlAdminLogin = 'http://localhost:3000/adminLogin';
  getAdminCredential() {
    return this.http.get(this.urlAdminLogin);
  }

  /// User Account
  uUrl = 'http://localhost:3000/userRegistration';
  addUser(data: any) {
    return this.http.post(this.uUrl, data);
  }
  deleteUser(id: any) {
    return this.http.delete(this.uUrl + '/' + id);
  }
  getAllUsers() {
    return this.http.get(this.uUrl);
  }
  getTheUser(id: any) {
    return this.http.get(this.uUrl + '/' + id);
  }
  editUser(id: any, newData: any) {
    return this.http.put(this.uUrl + '/' + id, newData);
  }

  // Orders
  oUrl = 'http://localhost:8080/api/v1/orders';
  addOrder(data: any) {
    return this.http.post(this.oUrl, data);
  }
  deleteOrder(id: any) {
    return this.http.delete(this.oUrl + '/' + id);
  }
  getAllUnApprovedOrders() {
    return this.http.get(this.oUrl + '/unApproved');
  }
  getAllApprovedOrders() {
    return this.http.get(this.oUrl + '/approved');
  }
  getAllOrders() {
    return this.http.get(this.oUrl);
  }
  getTheOrder(id: any) {
    return this.http.get(this.oUrl + '/' + id);
  }
  editOrder(id: any, newData: any) {
    return this.http.put(this.oUrl, newData);
  }
  makeOrderApproved(id: any) {
    return this.http.put(this.oUrl + '/makeApprove/' + id, {});
  }
}
