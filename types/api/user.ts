export type UserType = 'Free' | 'Pro';

export type UserProfile = {
  id: string;
  email: string;
  nickname: string;
  userType: UserType;
  termPersonalForMarketing: boolean;
  termMarketing: boolean;
};

export type UserProfileResponse = {
  success: boolean;
  data: UserProfile;
};
