import { Injectable } from '@nestjs/common';
import { takeLast } from 'rxjs';
import { Api, Apistatus } from './api.model';

@Injectable()
export class ApiService {
    private api :Api[] = []

     getAllapi():Api[]{
        return this.api;
    }

    getApibyID(id:number):Api
    {
        return this.api.find(api=>api.id==id)
    }
    createApi(id:number,title:string,description:string):Api
    {
        const api:Api = {
             id,
             title,
             description,
             status:Apistatus.OPEN
        }
        this.api.push(api);
        return api;
    }
    

    deleteApi(id:number)
    {
        this.api=this.api.filter(api=>api.id!=id)
    }

    updateApi(id:number,title:string,description:string,status:Apistatus): Api{
        let api = this.getApibyID(id)
        api.title = title;
        api.description = description;
        api.status = status;

        return api
    }
}
