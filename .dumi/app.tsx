// @ts-ignore
import { Navigate } from 'dumi';
import React from 'react';

// 如果不要首页
export const patchClientRoutes = ({ routes }: any) => {
  /**
   * redirect / to /intro
   */
  routes[0].children.unshift(
    {
      id: 'root-redirect',
      path: '/',
      element: <Navigate to="/introduc" />,
    },
  );

  return routes;
};
