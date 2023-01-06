const key = '9a0d87730cc4cbadcd498be668e87335'

const requestTime = async city => {
    const baseURL = `api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires,%20Argentina&appid=9a0d87730cc4cbadcd498be668e87335`
    const query = `?q=${city}&appid=${key}`

    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data;
}
