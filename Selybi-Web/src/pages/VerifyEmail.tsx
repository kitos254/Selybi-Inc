import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Loader2, CheckCircle, XCircle, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import Navbar from '../components/Navbar';
import heroBackground from "../assets/hero-bg.jpg";

const VerifyEmail = () => {
  const [verificationStatus, setVerificationStatus] = useState('loading'); // loading, success, error
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const verifyEmail = async () => {
      const urlParams = new URLSearchParams(location.search);
      const token = urlParams.get('token');

      if (!token) {
        setVerificationStatus('error');
        setMessage('No verification token provided');
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/clients/verify-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (data.status === 'success') {
          setVerificationStatus('success');
          setMessage(data.message || 'Email verified successfully!');
          
          // Store the token and user data
          if (data.token) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.data.user));
          }

          toast({
            title: "Email Verified!",
            description: "Your email has been successfully verified. You can now access InnoVault.",
          });

          // Redirect to InnoVault after 3 seconds
          setTimeout(() => {
            navigate('/innovault');
          }, 3000);
        } else {
          setVerificationStatus('error');
          setMessage(data.message || 'Email verification failed');
        }
      } catch (error) {
        console.error('Verification error:', error);
        setVerificationStatus('error');
        setMessage('Something went wrong during verification');
      }
    };

    verifyEmail();
  }, [location, navigate, toast]);

  const handleResendVerification = async () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to resend verification.",
        variant: "destructive",
      });
      return;
    }

    setIsResending(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:4000'}/api/clients/resend-verification`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        toast({
          title: "Verification Email Sent",
          description: "Please check your inbox for a new verification email.",
        });
        setEmail('');
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

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen pt-20 p-4">
        <Card className="w-full max-w-md bg-slate-900/95 backdrop-blur-sm shadow-2xl border-slate-700">
          <CardHeader className="space-y-1 text-center">
            <div className="flex justify-center mb-4">
              {verificationStatus === 'loading' && (
                <Loader2 className="h-12 w-12 text-blue-400 animate-spin" />
              )}
              {verificationStatus === 'success' && (
                <CheckCircle className="h-12 w-12 text-green-400" />
              )}
              {verificationStatus === 'error' && (
                <XCircle className="h-12 w-12 text-red-400" />
              )}
            </div>
            
            <CardTitle className="text-2xl font-bold text-white">
              {verificationStatus === 'loading' && 'Verifying Email...'}
              {verificationStatus === 'success' && 'Email Verified!'}
              {verificationStatus === 'error' && 'Verification Failed'}
            </CardTitle>
            
            <CardDescription className="text-slate-300">
              {verificationStatus === 'loading' && 'Please wait while we verify your email address.'}
              {verificationStatus === 'success' && 'Welcome to InnoVault! Redirecting you now...'}
              {verificationStatus === 'error' && 'There was an issue verifying your email.'}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="bg-slate-900/95">
            <div className="space-y-4">
              {message && (
                <Alert className={`${
                  verificationStatus === 'success' 
                    ? 'bg-green-900/80 border-green-800 text-green-200' 
                    : 'bg-red-900/80 border-red-800 text-red-200'
                }`}>
                  <AlertDescription>{message}</AlertDescription>
                </Alert>
              )}

              {verificationStatus === 'success' && (
                <div className="text-center space-y-4">
                  <p className="text-slate-300 text-sm">
                    You will be automatically redirected to InnoVault in a few seconds.
                  </p>
                  <Button 
                    onClick={() => navigate('/innovault')}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    Go to InnoVault Now
                  </Button>
                </div>
              )}

              {verificationStatus === 'error' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-slate-200 text-sm">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                      <input
                        id="email"
                        type="email"
                        placeholder="Enter your email to resend verification"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 text-white placeholder:text-slate-400 rounded-md focus:border-blue-400 focus:ring-1 focus:ring-blue-400 focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleResendVerification}
                    disabled={isResending}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {isResending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Resend Verification Email
                  </Button>
                </div>
              )}

              <div className="text-center space-y-2">
                <Link to="/login" className="text-blue-400 hover:text-blue-300 hover:underline text-sm">
                  Back to Login
                </Link>
                <br />
                <Link to="/" className="text-slate-400 hover:text-slate-300 hover:underline text-sm">
                  Back to Home
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VerifyEmail;
