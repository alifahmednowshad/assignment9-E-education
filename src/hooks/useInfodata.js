import { useState, useEffect } from "react";


const useInfodata = () => {

    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('./coursesData.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);
    return [courses];
}

export default useInfodata;