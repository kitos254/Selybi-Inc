import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  university?: string;
  course?: string;
  graduationYear?: number;
  studentId?: string;
  phone?: string;
  bio?: string;
  skills?: string[];
  portfolio?: string;
  github?: string;
  linkedin?: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (emailOrUsername: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000/api';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const storedToken = localStorage.getItem('selybi_web_token');
        const storedUser = localStorage.getItem('selybi_web_user');

        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
          
          // Verify token is still valid
          const response = await fetch(`${API_BASE_URL}/clients/verify-token`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${storedToken}`,
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            // Token is invalid, clear auth state
            localStorage.removeItem('selybi_web_token');
            localStorage.removeItem('selybi_web_user');
            setToken(null);
            setUser(null);
          }
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        localStorage.removeItem('selybi_web_token');
        localStorage.removeItem('selybi_web_user');
        setToken(null);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (emailOrUsername: string, password: string): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/clients/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier: emailOrUsername, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific verification error
        if (data.needsVerification) {
          const error = new Error(data.message || 'Email verification required');
          (error as any).needsVerification = true;
          (error as any).email = data.email;
          throw error;
        }
        throw new Error(data.message || 'Login failed');
      }

      const { token: authToken, data: { user: userData } } = data;

      // Store auth data
      localStorage.setItem('selybi_web_token', authToken);
      localStorage.setItem('selybi_web_user', JSON.stringify(userData));
      
      setToken(authToken);
      setUser(userData);
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData: RegisterData): Promise<void> => {
    try {
      const response = await fetch(`${API_BASE_URL}/clients/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      // Registration successful but user needs to verify email
      // Don't store auth data yet - user needs to verify email first
      console.log('Registration successful:', data.message);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('selybi_web_token');
    localStorage.removeItem('selybi_web_user');
    setToken(null);
    setUser(null);
  };

  const isAuthenticated = !!user && !!token;

  const value: AuthContextType = {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
