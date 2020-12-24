import axios from 'axios';


export async function fetch_rejected_users() {
    return axios({method: 'post', url: 'http://127.0.0.1:18800/admin/users/get_rejected'}).then(res => {
        return res.data
    });
}

export async function fetch_approved_users() {
    return axios({method: 'post', url: 'http://127.0.0.1:18800/admin/users/get_approved'}).then(res => {
        return res.data
    });
}

export async function fetch_all_users() {
    return axios({method: 'post', url: 'http://127.0.0.1:18800/admin/users/get_all'}).then(res => {
        return res.data
    });
}


export async function reject_user(username) {
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:18800/admin/users/reject',
        data: {username: username}
    }).then(res => {
        return res.data
    });
}

export async function approve_user(username) {
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:18800/admin/users/approve',
        data: {username: username}
    }).then(res => {
        return res.data
    });
}


