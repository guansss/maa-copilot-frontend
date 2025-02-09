import { Response } from 'models/network'
import { jsonRequest } from 'utils/fetcher'

export interface LoginResponse {
  token: string
  validBefore: string
  userInfo: UserInfo
}

export interface UserInfo {
  id: string
  userName: string
  role: string
  activated: boolean
  favoriteLists: Record<string, any>
  uploadCount: number
}

export const requestLogin = (email: string, password: string) => {
  return jsonRequest<Response<LoginResponse>>('/user/login', {
    method: 'POST',
    json: {
      email,
      password,
    },
  })
}

export interface ActivationResponse {}

export const requestActivation = (code: string) => {
  return jsonRequest<Response<ActivationResponse>>('/user/activate', {
    method: 'POST',
    json: {
      token: code,
    },
  })
}

export interface ActivationCodeResponse {}

export const requestActivationCode = () => {
  return jsonRequest<Response<ActivationCodeResponse>>(
    '/user/activate/request',
    {
      method: 'POST',
      json: {},
    },
  )
}

export interface RegisterResponse {}

export const requestRegister = (
  email: string,
  username: string,
  password: string,
) => {
  return jsonRequest<Response<RegisterResponse>>('/user/register', {
    method: 'POST',
    json: {
      email,
      user_name: username,
      password,
    },
  })
}
