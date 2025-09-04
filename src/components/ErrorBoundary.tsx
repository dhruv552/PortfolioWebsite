import { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, Home } from 'lucide-react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-surface to-dark-card text-text-light flex items-center justify-center p-4">
                    <Card className="w-full max-w-md bg-dark-card border-gray-700">
                        <CardHeader className="text-center">
                            <CardTitle className="text-2xl text-red-400">Oops! Something went wrong</CardTitle>
                            <CardDescription className="text-text-muted">
                                We encountered an unexpected error. Don't worry, this has been logged for review.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <div className="p-3 bg-red-900/20 border border-red-500/30 rounded text-sm text-red-300">
                                    <pre className="whitespace-pre-wrap break-words">
                                        {this.state.error.message}
                                    </pre>
                                </div>
                            )}
                            <div className="flex gap-2">
                                <Button
                                    onClick={() => window.location.reload()}
                                    className="flex-1 bg-accent-blue hover:bg-accent-blue/90"
                                >
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Reload Page
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => window.location.href = '/'}
                                    className="flex-1 border-gray-600 text-text-light hover:bg-dark-surface"
                                >
                                    <Home className="w-4 h-4 mr-2" />
                                    Go Home
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;