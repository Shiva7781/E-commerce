import axios from "axios";

// const BASE_URL = "http://localhost:5000/api/";
const BASE_URL = "https://shiva-e-commerce.herokuapp.com/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzN2IzNmM3NTdkMGI0YmE3ZTJiMWQxZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTEyNzg5MSwiZXhwIjoxNjY5Mzg3MDkxfQ.KF2J9BCnGSe-NUjAypDKTrZAgCyj5T5rJltQy_9zlNc";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
