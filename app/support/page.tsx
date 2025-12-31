"use client";

import { LifeBuoy, MessageSquare, ShieldCheck } from "lucide-react";

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0c] pt-32 pb-20 px-4 flex items-center">
      <div className="container mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl font-serif font-black uppercase italic text-white mb-6 leading-none">
            Help <span className="text-primary">/</span> Desk
          </h1>
          <p className="text-white/40 text-lg font-light leading-relaxed mb-8 italic">
            «Проблемы с авторизацией, найденный баг или жалоба на игрока? Наша
            команда модераторов готова оказать содействие.»
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/60">
              <ShieldCheck className="text-primary w-5 h-5" />
              <span className="text-xs uppercase font-bold tracking-widest">
                Ответ в течение 15 минут
              </span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <LifeBuoy className="text-primary w-5 h-5" />
              <span className="text-xs uppercase font-bold tracking-widest">
                Помощь с RPG-механиками
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/5 p-10 relative">
          <div className="absolute top-0 right-0 p-3 bg-primary text-white">
            <MessageSquare className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-black uppercase italic text-white mb-8 tracking-widest">
            Связь через Discord
          </h2>
          <p className="text-white/40 text-sm mb-10 leading-relaxed uppercase tracking-tighter">
            Нажмите кнопку ниже, чтобы попасть на наш сервер и создать
            автоматический тикет в канале{" "}
            <span className="text-white">#help-center</span>.
          </p>
          <a
            href="https://discord.gg/N5nwUBqJKc"
            target="_blank"
            className="block w-full h-20 flex items-center justify-center bg-primary text-white font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all text-xs"
          >
            Открыть Тикет
          </a>
        </div>
      </div>
    </main>
  );
}
