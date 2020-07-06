import { Injectable } from '@angular/core';
import { Observable,} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface Logindata {
    emailOrPhone: string
    Password: string
}

@Injectable()

export class AuthService {
    
   
    constructor(private http: HttpClient) {}

    public login(userLogin: Logindata): Observable<any> {
        let body = {
            emailOrPhone: "sutapa@mobifyi.com",
            deviceId: "12345",
            devType: 3,
            loginType: 1,
            password: "3Embed007",
            latitude: "13.0002607",
            longitude: "77.45730089999999"
        }

        let headers = new HttpHeaders()
            .set("Content-Type", "application/json")
            .set("lan", "en");
        return this.http.post('https://dev-api.service-genie.xyz/customer/signIn', body, { headers: headers }).pipe(map(
            (response:any) => {
                console.log(response.data.token)
                return this.saveToken(response.data.token);  
            
        }));


    }

    private saveToken(token: string): string {
        localStorage.setItem('app_auth',token)
        return token
}

}































