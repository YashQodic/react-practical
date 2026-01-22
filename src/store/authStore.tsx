import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  userDetails: {
    username: string;
  } | null;
  login: () => void;
  storeUserDetails: (details: { username: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  userDetails: null,
  login: () => set({ isAuthenticated: true }),
  storeUserDetails: (details: { username: string }) =>
    set({ userDetails: details }),
  logout: () => set({ isAuthenticated: false, userDetails: null }),
}));
