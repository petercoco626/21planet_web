export type CheckEmailDuplicationRequest = {
  email: string;
};

export type CheckEmailDuplicationResponse = {
  data: {
    canUseThisEmail: boolean;
  };
};

export type SignUpRequest = {
  email: string;
  password: string;
  nickname: string;
  term_age: boolean;
  term_service: boolean;
  term_personal: boolean;
  term_personal_for_marketing: boolean;
  term_marketing: boolean;
};

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  data?: {
    accessToken: string;
    refreshToken: string;
  };
};

export type ChangePasswordRequest = {
  email: string;
  password: string;
  newPassword: string;
};

export type CheckCurrentPasswordRequest = {
  currentPassword: string;
};

export type IssueTempPasswordRequest = {
  email: string;
};
