import axios from "axios";
import { RegisterUserRequest } from "../dto/AuthorizationDto/RegisterUserRequest";
import { LoginResult } from "../dto/AuthorizationDto/LoginResult";
import { ProblemDetails } from "../dto/AuthorizationDto/ProblemDetails";
import { LoginRequest } from "../dto/AuthorizationDto/LoginRequest";
import { UnauthorizedResult } from "../dto/AuthorizationDto/UnauthorizedResult";

const baseRequest = axios.create({
  baseURL: "http://dev.trainee.dex-it.ru",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = (data: RegisterUserRequest) => {
  return baseRequest
    .post<LoginResult>("/api/Auth/SignUp", data)
    .catch((error) => {
      const response = error.response;
      if (response && response.data) {
        throw response.data as ProblemDetails;
      }
      throw error;
    });
};

export const loginUser = (data: LoginRequest) => {
  return baseRequest
    .post<LoginResult>("/api/Auth/SignIn", data)
    .catch((error) => {
      const response = error.response;
      if (response && response.data) {
        if (response.status === 400) {
          throw response.data as ProblemDetails;
        }
        if (response.status === 401) {
          throw response.data as UnauthorizedResult;
        }
      }
      throw error;
    });
};
