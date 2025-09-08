import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Loader2, Eye, EyeOff, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Navbar from '../components/Navbar';
import heroBackground from "../assets/hero-bg.jpg";

const Login = () => {
  const [formData, setFormData] = useState({
    identifier: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [needsVerification, setNeedsVerification] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isResending, setIsResending] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setNeedsVerification(false);

    try {
      await login(formData.identifier, formData.password);
      toast({
        title: "Login successful!",
        description: "Welcome back to InnoVault.",
      });
      navigate('/innovault');
    } catch (error) {
      setError(error.message);
      
      // Check if this is a verification error
      if (error.needsVerification) {
        setNeedsVerification(true);
        setUserEmail(error.email || formData.identifier);
      }
      
      toast({
        title: "Login failed",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendVerification = async () => {
    setIsResending(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/clients/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: userEmail }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        toast({
          title: "Verification Email Sent",
          description: "Please check your inbox for a new verification email.",
        });
        setNeedsVerification(false);
        setError('');
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to send verification email.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Resend verification error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 to-navy-deep/90"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Form Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-20 p-4">
        <Card className="w-full max-w-md bg-slate-900/95 backdrop-blur-sm shadow-2xl border-slate-700">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold text-white">Welcome back</CardTitle>
            <CardDescription className="text-slate-300">
              Sign in to your account to access InnoVault
            </CardDescription>
          </CardHeader>
        <CardContent className="bg-slate-900/95">
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive" className="bg-red-900/80 border-red-800 text-red-200">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {needsVerification && (
              <Alert className="bg-blue-900/80 border-blue-800 text-blue-200">
                <Mail className="h-4 w-4" />
                <AlertDescription className="ml-2">
                  <div className="space-y-2">
                    <p>Please verify your email address to continue.</p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleResendVerification}
                      disabled={isResending}
                      className="bg-blue-800 border-blue-600 text-blue-200 hover:bg-blue-700"
                    >
                      {isResending && <Loader2 className="mr-2 h-3 w-3 animate-spin" />}
                      Resend Verification Email
                    </Button>
                  </div>
                </AlertDescription>
              </Alert>
            )}

            <div className="space-y-2">
              <Label htmlFor="identifier" className="text-slate-200">Email or Username</Label>
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="Enter your email or username"
                value={formData.identifier}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-slate-200">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-slate-700 text-slate-400"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Sign In
            </Button>

            <div className="text-center space-y-2">
              <p className="text-sm text-slate-300">
                Don't have an account?{' '}
                <Link to="/register" className="text-blue-400 hover:text-blue-300 hover:underline font-medium">
                  Sign up
                </Link>
              </p>
              <Link to="/" className="text-sm text-slate-400 hover:text-slate-300 hover:underline">
                Back to home
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
      </div>
    </div>
  );
};

export default Login;
