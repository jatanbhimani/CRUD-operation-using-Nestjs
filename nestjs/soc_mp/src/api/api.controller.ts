import { Body, Controller, Get, Post } from '@nestjs/common';
import { Delete, Param, Patch } from '@nestjs/common/decorators';
import { ApiService } from './api.service';
import { Api, Apistatus } from './api.model';

@Controller('api')
export class ApiController {
    constructor(private apiService:ApiService){}

    @Get()
    getAllapi():Api[]
    {
        return this.apiService.getAllapi();
    }
    @Get('/:id')
    getApibyID(@Param('id') id:number) : Api
    {
        return this.apiService.getApibyID(id);
    }
    @Post()
    createApi(@Body('id') id:number,@Body('title') title:string,@Body('description') description:string):Api
    {
        return this.apiService.createApi(id,title,description);
    }

    @Delete('/:id')
    deleteApi(@Param('id') id:number){
        this.apiService.deleteApi(id);
        return `Task ${id} Deleted`
    }

    @Patch('/:id')
    updateApi(@Param('id') id:number,@Body('title') title:string,@Body('description') description:string,@Body('status') status:Apistatus){
        return this.apiService.updateApi(id,title,description,status);
    } 
}
