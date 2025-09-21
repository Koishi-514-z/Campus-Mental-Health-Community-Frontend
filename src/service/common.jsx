export async function getJson(url) {
    let res = await fetch(url, { method: "GET", credentials: "include" });
    let statusCode = res.status; 
    if(statusCode === 401 || statusCode === 403) {
        window.location.href = '/forbidden';
        return null;
    }
    let res_json = await res.json();
    return res_json;
}

export async function get(url) {
    let res = await fetch(url, { method: "GET", credentials: "include" });
    let statusCode = res.status; 
    if(statusCode === 401 || statusCode === 403) {
        window.location.href = '/forbidden';
        return null;
    }
    return res;
}

export async function put(url, data) {
    let opts = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };
    let res = await fetch(url, opts);
    let statusCode = res.status; 
    if(statusCode === 401 || statusCode === 403) {
        window.location.href = '/forbidden';
        return null;
    }
    let res_json = await res.json();
    return res_json;
}

export async function del(url, data) {
    let opts = {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };
    let res = await fetch(url, opts);
    let statusCode = res.status; 
    if(statusCode === 401 || statusCode === 403) {
        window.location.href = '/forbidden';
        return null;
    }
    let res_json = await res.json();
    return res_json;
}


export async function post(url, data) {
    let opts = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };
    let res = await fetch(url, opts);
    let statusCode = res.status; 
    if(statusCode === 401 || statusCode === 403) {
        window.location.href = '/forbidden';
        return null;
    }
    let res_json = await res.json();
    return res_json;
}

export async function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
            resolve(event.target.result);
        };
        reader.onerror = (error) => {
            reject(error);
        }
        reader.readAsDataURL(file);
    });
}

// export const BASEURL = 'http://localhost:8080';
export const BASEURL = 'https://localhost:8443';
export const PREFIX = `${BASEURL}/api`;