const isProductionEnv = process.env.NEXT_PUBLIC_BUILD_ENV === 'production';

export const apiServerHost = isProductionEnv
  ? 'https://api.21planet.world'
  : 'https://api-dev.21planet.world';
