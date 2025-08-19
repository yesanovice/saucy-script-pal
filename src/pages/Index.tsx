import { useState, useEffect } from 'react';
import AiChat from '@/components/AiChat';
import ApiKeyInput from '@/components/ApiKeyInput';

const Index = () => {
  const [apiKey, setApiKey] = useState<string>('');

  useEffect(() => {
    // Check if API key is stored in localStorage
    const storedApiKey = localStorage.getItem('openai_api_key');
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  const handleApiKeySubmit = (key: string) => {
    setApiKey(key);
    localStorage.setItem('openai_api_key', key);
  };

  if (!apiKey) {
    return <ApiKeyInput onApiKeySubmit={handleApiKeySubmit} />;
  }

  return <AiChat apiKey={apiKey} />;
};

export default Index;
