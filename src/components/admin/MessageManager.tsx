"use client";

import { useState } from "react";
import { 
  Search, Filter, CheckCircle2, Circle, 
  Trash2, Calendar, ChevronDown 
} from "lucide-react";
import { markAsRead, deleteMessage } from "@/actions/contact";
import { Message } from "@/generated/prisma/client";

interface MessageManagerProps {
  initialMessages: Message[];
}

export default function MessageManager({ initialMessages }: MessageManagerProps) {
  const [messages, setMessages] = useState(initialMessages);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");


  const filteredMessages = messages.filter((msg) => {
    const matchesSearch = msg.subject.toLowerCase().includes(search.toLowerCase()) || 
                          msg.email.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = filter === "all" ? true : 
                         filter === "read" ? msg.isRead : !msg.isRead;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Barre de Filtres */}
      <div className="flex flex-wrap gap-4 items-center justify-between bg-bg-card/50 p-4 rounded-2xl border border-primary/10">
        <div className="relative flex-1 min-w-75">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text"
            placeholder="Search Messages or Email..."
            className="w-full bg-bg-page border border-slate-700 rounded-xl py-2 pl-10 pr-4 focus:border-primary outline-none transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter size={18} className="text-primary" />
          <select 
            className="bg-bg-page border border-slate-700 rounded-xl py-2 px-4 outline-none"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Messages</option>
            <option value="unread">Unread</option>
            <option value="read">Read</option>
          </select>
        </div>
      </div>

      {/* Liste des Messages */}
      <div className="grid gap-4">
        {filteredMessages.map((msg) => (
          <div 
            key={msg.id} 
            className={`group p-5 rounded-2xl border transition-all duration-300 ${
              msg.isRead 
              ? "bg-bg-card/40 border-slate-800 opacity-80" 
              : "bg-bg-card border-primary/30 shadow-[0_0_20px_rgba(var(--primary-rgb),0.05)]"
            }`}
          >
            <div className="flex justify-between items-start gap-4">
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  {!msg.isRead && <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />}
                  <h3 className="font-bold text-lg text-text-main font-title">{msg.subject}</h3>
                </div>
                <p className="text-sm text-text-muted flex items-center gap-2">
                  <span className="text-primary">{msg.name || "Unknown"}</span> 
                  • {msg.email} 
                  • <Calendar size={12} /> {new Date(msg.createdAt).toLocaleDateString()}
                </p>
                <p className="mt-3 text-text-main line-clamp-2 group-hover:line-clamp-none transition-all">
                  {msg.content}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  onClick={() => {markAsRead(msg.id); setMessages(messages.map(m => m.id === msg.id ? {...m, isRead: true} : m))}}
                  className={`p-2 rounded-lg transition-colors ${msg.isRead ? "text-slate-600" : "text-emerald-500 hover:bg-emerald-500/10"}`}
                  title="Mark as Read"
                >
                  {msg.isRead ? <CheckCircle2 size={20} /> : <Circle size={20} />}
                </button>
                <button 
                  className="p-2 text-slate-600 hover:text-rose-500 hover:bg-rose-500/10 rounded-lg transition-colors"
                  title="Delete"
                  onClick={() => {deleteMessage(msg.id); setMessages(messages.filter(m => m.id !== msg.id));}}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}