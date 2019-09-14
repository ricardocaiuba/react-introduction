import { ApiService } from "./ApiService" ;

const endPoint = "courses" ;

export const CourseService = {
    list() {
        return ApiService.get(endPoint) ;
    },
    create(newCourse) {
        return ApiService.post(endPoint, newCourse) ;
    },
    remove(courseId) {
        return ApiService.delete(endPoint, courseId)
    }
} ;