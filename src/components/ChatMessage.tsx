
import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  animate?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, animate = false }) => {
  // Format message with Markdown-like syntax (simple version)
  const formatMessage = (content: string) => {
    const formattedContent = content
      .split('\n')
      .map((line, i) => {
        // Handle bold text
        const boldLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return <p key={i} dangerouslySetInnerHTML={{ __html: boldLine }} />;
      });

    return <>{formattedContent}</>;
  };

  return (
    <div 
      className={cn(
        "px-4 py-3 rounded-xl max-w-[80%] md:max-w-[70%] transition-all",
        animate && "animate-slide-up",
        isUser 
          ? "ml-auto bg-blue-purple-gradient text-white shadow-md" 
          : "mr-auto bg-white/90 dark:bg-slate-800/90 shadow-sm border border-slate-200 dark:border-slate-700"
      )}
      style={{
        borderTopRightRadius: isUser ? '4px' : undefined,
        borderTopLeftRadius: !isUser ? '4px' : undefined,
      }}
    >
      <div className={cn(
        "text-sm md:text-base whitespace-pre-wrap",
        !isUser && "text-slate-800 dark:text-slate-200"
      )}>
        {formatMessage(message)}
      </div>
    </div>
  );
};

export default ChatMessage;
