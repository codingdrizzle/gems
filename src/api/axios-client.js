import axios from 'axios';

export const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
})


const token = typeof window !== "undefined" && window.localStorage.getItem('token')

export const API_AUTH = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})

