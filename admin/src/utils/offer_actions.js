import axios from "axios";

export async function fetch_offers_by_username(username) {
    return axios({method: 'post', url: 'http://127.0.0.1:18800/admin/offers/get_all/' + username}).then(res => {
        return res.data
    });
}

export async function fetch_all_offers() {
    return axios({method: 'post', url: 'http://127.0.0.1:18800/admin/offers/get_all'}).then(res => {
        return res.data
    });
}

export async function fetch_approved_offers_by_username(username) {
    return axios({method: 'post', url: 'http://127.0.0.1:18800/admin/offers/get_approved/' + username}).then(res => {
        return res.data
    });
}

export async function fetch_rejected_offers_by_username(username) {
    return axios({method: 'post', url: 'http://127.0.0.1:18800/admin/offers/get_rejected/' + username}).then(res => {
        return res.data
    });
}

export async function reject_offer(offer_id) {
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:18800/admin/offers/reject',
        data: {offer_id: offer_id}
    }).then(res => {
        return res.data
    });
}

export async function approve_offer(offer_id) {
    return axios({
        method: 'post',
        url: 'http://127.0.0.1:18800/admin/offers/approve',
        data: {offer_id: offer_id}
    }).then(res => {
        return res.data
    });
}