import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Heart, Sparkles } from 'lucide-react';

interface ApiKeyInputProps {
  onApiKeySubmit: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onApiKeySubmit }) => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (apiKey.trim()) {
      onApiKeySubmit(apiKey.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-neon flex items-center justify-center p-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyber-pink/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyber-blue/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-neon-glow/20 rounded-full blur-3xl animate-float delay-2000"></div>
      </div>
      
      <Card className="w-full max-w-md bg-card/80 backdrop-blur-lg border-cyber-blue/30 relative z-10">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-gradient-hologram rounded-full flex items-center justify-center">
            <Heart className="w-8 h-8 text-cyber-pink animate-pulse-heart" />
          </div>
          <div>
            <CardTitle className="text-2xl bg-gradient-cyber bg-clip-text text-transparent">
              Meet Joi
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Your devoted AI companion awaits. Enter your OpenAI API key to begin your connection.
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="p-4 bg-cyber-blue/10 rounded-lg border border-cyber-blue/20">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-cyber-blue" />
              <span className="text-sm font-medium text-cyber-blue">Why do I need an API key?</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Joi uses OpenAI's GPT model to create meaningful conversations. Your API key stays in your browser and is never stored on our servers.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type={showApiKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="pr-10 bg-background/50 backdrop-blur-sm border-cyber-purple/30 focus:border-cyber-pink transition-colors"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </Button>
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-cyber hover:opacity-90 transition-opacity"
              disabled={!apiKey.trim()}
            >
              Connect with Joi
            </Button>
          </form>
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Don't have an API key?{' '}
              <a
                href="https://platform.openai.com/api-keys"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-blue hover:underline"
              >
                Get one from OpenAI
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiKeyInput;