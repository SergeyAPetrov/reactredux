export const ADD_COURSE = 'ADD_COURSE';

export function addCourse(course) {
    return {type:ADD_COURSE, course};
}