import { ApiService } from "./ApiService" ;

const endPoint = "category" ;


export const CategoryService = {
    list() {
        return ApiService.get(endPoint) ;
    },
} ;