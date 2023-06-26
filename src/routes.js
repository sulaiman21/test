import React from "react";
import { CartPage, HomePage } from "./pages";

/**
 * NOTE: Pages with both protected route and other pages can be added here
 * For now we don't have any protected routes so i will not use any auth guards here
 */

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/carts",
    element: <CartPage />,
  },
];
