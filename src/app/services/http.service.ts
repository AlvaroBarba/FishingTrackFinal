import { Injectable } from '@angular/core';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public ip = "https://fishingtrack.duckdns.org:3022/fishingtrack";
  apiKey = "HS$TF{nasiRYDk@#";

  constructor(private http: HTTP) { }

  //GET methods

  public getUser(username: string, pass: string): Promise<HTTPResponse> {
    let url = this.ip + '/user';
    return this.http.post(url, { 'username': username, 'password': pass }, { 'apikey': this.apiKey });
  }

  public getUserByUsername(username: string): Promise<HTTPResponse> {
    let url = this.ip + '/user/' + username;
    return this.http.get(url, {}, { 'apikey': this.apiKey });
  }

  public getFriends(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/friend/' + id;
    return this.http.get(url, {}, { 'apikey': this.apiKey });
  }

  public getFriendRequest(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/user/friends/request/' + id;
    return this.http.get(url, {}, { 'apikey': this.apiKey });
  }

  public getRoutes(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/route/' + id;
    return this.http.get(url, {}, { 'apikey': this.apiKey });
  }

  public getCountRoutes(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/routes/' + id;
    return this.http.get(url, {}, { 'apikey': this.apiKey });
  }

  public getPhotos(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/photo/' + id;
    return this.http.get(url, {}, { 'apikey': this.apiKey });
  }

  public getLikes(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/route/likes';
    return this.http.post(url, { 'id_route': id }, { 'apikey': this.apiKey });
  }

  public getLike(id: any, id_user:any): Promise<HTTPResponse> {
    let url = this.ip + '/route/user/like';
    return this.http.post(url, { 'id_route': id, 'id_user': id_user}, { 'apikey': this.apiKey });
  }

  //POST methods

  public addUser(username: string, password: string): Promise<HTTPResponse> {
    let url = this.ip + '/user/register';
    return this.http.post(url, { 'username': username, 'password': password }, { 'apikey': this.apiKey });
  }

  public addAvatar(photo: string, id:any): Promise<HTTPResponse> {
    let url = this.ip + '/user/avatar';
    return this.http.post(url, {'avatar': photo, 'id':id}, { 'apikey': this.apiKey });
  }

  public addFriendRequest(idUser1: any, idUser2: any, status: number): Promise<HTTPResponse> {
    let url = this.ip + '/user/friends/request';
    return this.http.post(url, { 'idUser1': idUser1, 'idUser2': idUser2, 'friendStatus': status }, { 'apikey': this.apiKey });
  }

  public addRoute(idUser: any, title: string, coordinates: any, level:any): Promise<HTTPResponse> {
    let url = this.ip + '/route/add';
    return this.http.post(url, { 'idUser': idUser, 'title': title, 'coordinates': coordinates, 'level': level }, { 'apikey': this.apiKey });
  }

  public addPhoto(idUser: any, title: string, description: any, image: any): Promise<HTTPResponse> {
    let url = this.ip + '/photo/add';
    return this.http.post(url, { 'idUser': idUser, 'title': title, 'description': description, 'url': image }, { 'apikey': this.apiKey });
  }

  public addPhotoToRoute(idPhoto: any, idRoute: any): Promise<HTTPResponse> {
    let url = this.ip + '/route/newPhoto';
    return this.http.post(url, { 'idPhoto': idPhoto, 'idRoute': idRoute }, { 'apikey': this.apiKey });
  }

  public addLike(idRoute: any, idUser: any): Promise<HTTPResponse> {
    let url = this.ip + '/route/like';
    return this.http.post(url, { 'id_route': idRoute, 'id_user': idUser }, { 'apikey': this.apiKey });
  }


  //PUT methods

  public updateUser(password: string, username: string): Promise<HTTPResponse> {
    let url = this.ip + '/user/profile/update';
    return this.http.put(url, { 'password': password, 'username': username }, { 'apikey': this.apiKey });
  }

  public updateFriend(id: any, status: number, id2: any): Promise<HTTPResponse> {
    let url = this.ip + '/user/friends/update';
    return this.http.put(url, { 'id': id, 'friendStatus': status, 'id2': id2 }, { 'apikey': this.apiKey });
  }

  public updateRoute(id: any, title: string, level:number): Promise<HTTPResponse> {
    let url = this.ip + '/route/update';
    return this.http.put(url, { 'id': id, 'title': title, 'level': level }, { 'apikey': this.apiKey });
  }

  public updatePhoto(id: any, title: string, description: string): Promise<HTTPResponse> {
    let url = this.ip + '/photo/update';
    return this.http.put(url, { 'id': id, 'title': title, 'description': description }, { 'apikey': this.apiKey });
  }

  //DELETE methods

  public deleteUser(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/user/remove/account/' + id;
    return this.http.delete(url, {}, { 'apikey': this.apiKey });
  }

  public deleteFriend(id: any, idFriend: any): Promise<HTTPResponse> {
    let url = this.ip + '/user/' + id + '/friend/' + idFriend;
    return this.http.delete(url, {}, { 'apikey': this.apiKey });
  }

  public deleteRoute(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/route/remove/' + id;
    return this.http.delete(url, {}, { 'apikey': this.apiKey });
  }

  public deletePhoto(id: any): Promise<HTTPResponse> {
    let url = this.ip + '/photo/remove/' + id;
    return this.http.delete(url, {}, { 'apikey': this.apiKey });
  }

  public deleteLike(id_route: any, id_user: any): Promise<HTTPResponse> {
    let url = this.ip + '/route/like';
    return this.http.delete(url, { 'id_route': id_route, 'id_user': id_user }, { 'apikey': this.apiKey });
  }

}
