import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessage } from '../services/api';
import ReactMarkdown from 'react-markdown';
import { useTheme } from '../context/ThemeContext';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        "Bonjour! Je suis l'assistant virtuel de Brahim. Je peux vous renseigner sur son parcours, ses compétences en DevOps et backend, ainsi que ses projets. Comment puis-je vous aider?",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await sendMessage(input);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: response,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "Désolé, j'ai rencontré une erreur. Veuillez réessayer.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-[var(--card)] rounded-lg shadow-2xl w-[380px] h-[600px] flex flex-col overflow-hidden animate-slide-up border border-[var(--foreground)]/10">
          {/* Header */}
          <div className="bg-primary-600 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bot className="w-6 h-6 text-white" />
              <h3 className="text-l font-bold font-mono text-white">
                Assistant de Brahim
              </h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-white/80 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`flex items-start space-x-2 max-w-[80%] ${
                    message.role === 'user'
                      ? 'flex-row-reverse space-x-reverse'
                      : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === 'user' 
                        ? 'bg-primary-600' 
                        : theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'
                    }`}
                  >
                    {message.role === 'user' ? (
                      <User className="w-5 h-5 text-white" />
                    ) : (
                      <Bot className={`w-5 h-5 ${theme === 'light' ? 'text-gray-600' : 'text-gray-200'}`} />
                    )}
                  </div>
                  <div
                    className={`rounded-lg p-3 ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : theme === 'light' 
                          ? 'bg-gray-100 text-gray-800' 
                          : 'bg-gray-800 text-gray-100'
                    }`}
                  >
                    <ReactMarkdown className="text-sm font-mono prose prose-sm max-w-none">
                      {message.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className={`rounded-lg p-3 flex items-center space-x-2 ${
                  theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'
                }`}>
                  <div className="flex space-x-1">
                    <div
                      className={`w-2 h-2 rounded-full animate-bounce ${
                        theme === 'light' ? 'bg-gray-400' : 'bg-gray-500'
                      }`}
                      style={{ animationDelay: '0ms' }}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full animate-bounce ${
                        theme === 'light' ? 'bg-gray-400' : 'bg-gray-500'
                      }`}
                      style={{ animationDelay: '150ms' }}
                    ></div>
                    <div
                      className={`w-2 h-2 rounded-full animate-bounce ${
                        theme === 'light' ? 'bg-gray-400' : 'bg-gray-500'
                      }`}
                      style={{ animationDelay: '300ms' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--foreground)]/10">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Posez votre question..."
                className={`flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-600 ${
                  theme === 'light' 
                    ? 'bg-white text-gray-900 border-gray-200' 
                    : 'bg-gray-800 text-white border-gray-700'
                }`}
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-primary-600 text-white rounded-lg px-4 py-2 hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 text-white rounded-full p-4 shadow-lg hover:bg-primary-700 transition-transform hover:scale-110"
        >
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-6 h-6" />
            <span>Explorez Brahim ici!</span>
          </div>
        </button>
      )}
    </div>
  );
};