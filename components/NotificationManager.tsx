
import React, { useEffect } from 'react';
import { AppNotification } from '../types';
import { Unlock, Bell, X, Terminal } from 'lucide-react';

interface NotificationManagerProps {
  notifications: AppNotification[];
  onDismiss: (id: string) => void;
}

const NotificationManager: React.FC<NotificationManagerProps> = ({ notifications, onDismiss }) => {
  
  // Auto-dismiss logic handled by rendering components that set their own timers?
  // Or parent loop? The loop is too slow (1s).
  // Better to let each toast handle its own timeout via useEffect.
  
  return (
    <div className="fixed top-20 right-4 z-[999] flex flex-col gap-2 w-72 pointer-events-none">
      {notifications.map(notif => (
        <Toast key={notif.id} notification={notif} onDismiss={onDismiss} />
      ))}
    </div>
  );
};

const Toast: React.FC<{ notification: AppNotification; onDismiss: (id: string) => void }> = ({ notification, onDismiss }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss(notification.id);
        }, 5000); // 5 seconds display
        return () => clearTimeout(timer);
    }, [notification.id, onDismiss]);

    return (
        <div className="pointer-events-auto bg-black/90 border border-term-green/50 text-term-green p-3 rounded-sm shadow-[0_0_15px_rgba(34,197,94,0.15)] flex items-start gap-3 animate-in slide-in-from-right duration-300 relative overflow-hidden group">
            {/* Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)50%,rgba(0,0,0,0.25)50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]"></div>
            
            <div className="p-1.5 bg-term-green/20 rounded border border-term-green/30 shrink-0">
                {notification.type === 'unlock' ? <Unlock size={16} /> : <Bell size={16} />}
            </div>
            
            <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start">
                    <h4 className="font-bold text-xs font-mono uppercase tracking-wider text-white">
                        {notification.title}
                    </h4>
                    <button 
                        onClick={() => onDismiss(notification.id)}
                        className="text-term-green/50 hover:text-white transition-colors"
                    >
                        <X size={12} />
                    </button>
                </div>
                <p className="text-xs font-mono text-gray-300 mt-1 leading-snug">
                    {notification.message}
                </p>
                <div className="mt-1.5 text-[9px] text-gray-600 font-mono">
                    <Terminal size={8} className="inline mr-1" />
                    SYSTEM_ALERT
                </div>
            </div>

            {/* Timer Bar */}
            <div className="absolute bottom-0 left-0 h-0.5 bg-term-green animate-[marquee_5s_linear_forwards] w-full" style={{animationName: 'width-shrink', animationDuration: '5s'}}></div>
            <style>{`
                @keyframes width-shrink {
                    from { width: 100%; }
                    to { width: 0%; }
                }
            `}</style>
        </div>
    );
};

export default NotificationManager;
