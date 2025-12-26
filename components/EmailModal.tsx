
import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Email, ResourceType } from '../types';
import { Mail, Trash2, ArrowRight, Download, X } from 'lucide-react';
import { RESOURCE_INFO } from '../constants';

interface EmailModalProps {
  emails: Email[];
  onClose: () => void;
  onRead: (id: string) => void;
  onClaim: (id: string) => void;
  onDelete: (id: string) => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ emails, onClose, onRead, onClaim, onDelete }) => {
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(null);

  const selectedEmail = emails.find(e => e.id === selectedEmailId);

  const handleSelect = (email: Email) => {
      setSelectedEmailId(email.id);
      if (!email.isRead) onRead(email.id);
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-3xl h-[600px] flex rounded-sm shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        
        {/* Sidebar List */}
        <div className="w-1/3 border-r border-term-gray flex flex-col bg-black/50">
            <div className="p-3 border-b border-term-gray flex items-center gap-2 font-mono text-xs font-bold text-gray-400 bg-gray-900/50">
                <Mail size={14} /> INBOX ({emails.filter(e => !e.isRead).length})
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800">
                {emails.length === 0 && (
                    <div className="p-4 text-center text-xs text-gray-600">无邮件</div>
                )}
                {emails.map(email => (
                    <div 
                        key={email.id}
                        onClick={() => handleSelect(email)}
                        className={`p-3 border-b border-gray-800 cursor-pointer hover:bg-gray-800/50 transition-colors
                            ${selectedEmailId === email.id ? 'bg-blue-900/20 border-l-2 border-l-blue-500' : ''}
                            ${!email.isRead ? 'text-white font-bold' : 'text-gray-500'}
                        `}
                    >
                        <div className="text-[10px] truncate opacity-70 mb-0.5">{email.sender}</div>
                        <div className="text-xs truncate">{email.subject}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col bg-[#0a0a0a] relative">
            {selectedEmail ? (
                <>
                    {/* Header */}
                    <div className="p-4 border-b border-gray-800">
                        <h2 className="text-sm font-bold text-white font-mono mb-1">{selectedEmail.subject}</h2>
                        <div className="flex justify-between items-center text-[10px] text-gray-500 font-mono">
                            <span>From: {selectedEmail.sender}</span>
                            <span>{new Date(selectedEmail.timestamp).toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Body */}
                    <div className="flex-1 p-6 overflow-y-auto font-mono text-xs leading-relaxed text-gray-300 whitespace-pre-wrap selection:bg-blue-900 selection:text-white">
                        {selectedEmail.body}
                    </div>

                    {/* Attachments */}
                    {selectedEmail.rewards && !selectedEmail.isClaimed && (
                        <div className="p-4 border-t border-gray-800 bg-gray-900/20">
                            <div className="text-[10px] uppercase font-bold text-gray-500 mb-2 flex items-center gap-1">
                                <Download size={10} /> 附件包含
                            </div>
                            <div className="flex items-center justify-between bg-black border border-gray-700 p-2 rounded">
                                <div className="flex gap-2">
                                    {Object.entries(selectedEmail.rewards).map(([res, val]) => (
                                        <span key={res} className={`text-xs font-mono ${RESOURCE_INFO[res as ResourceType].color}`}>
                                            +{val} {RESOURCE_INFO[res as ResourceType].name}
                                        </span>
                                    ))}
                                </div>
                                <button 
                                    onClick={() => onClaim(selectedEmail.id)}
                                    className="px-3 py-1 bg-term-green/20 text-term-green border border-term-green/50 rounded text-xs font-bold hover:bg-term-green hover:text-black transition-colors"
                                >
                                    领取
                                </button>
                            </div>
                        </div>
                    )}
                    {selectedEmail.isClaimed && (
                        <div className="p-2 border-t border-gray-800 bg-gray-900/50 text-center text-[10px] text-gray-600 font-mono">
                            [ 附件已领取 ]
                        </div>
                    )}

                    {/* Actions */}
                    <div className="p-3 border-t border-gray-800 flex justify-end gap-2 bg-gray-900/10">
                        <button 
                            onClick={() => { onDelete(selectedEmail.id); setSelectedEmailId(null); }}
                            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
                            title="Delete"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </>
            ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-700 gap-2">
                    <Mail size={48} className="opacity-20" />
                    <span className="text-xs font-mono">选择一封邮件阅读</span>
                </div>
            )}

            {/* Close Button (Absolute) */}
            <button 
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-600 hover:text-white"
            >
                <X size={18} />
            </button>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default EmailModal;
