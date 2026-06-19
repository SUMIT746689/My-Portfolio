'use client';

import Image from "next/image"
import { useTranslations } from '../../hooks/useTranslations'

function Skills() {
  const { t } = useTranslations();

  return (
    <>
      {/* Experience Summary with Coordinated Gradient Background */}
      <div className="relative h-fit bg-slate-50 dark:bg-slate-900 overflow-hidden">
        <div className="relative flex justify-center font-light text-lg sm:text-xl md:text-2xl px-4 pt-16 pb-40 min-w-fit z-10">
          <div className="text-center md:px-14 max-w-5xl">
            <h2 className="mb-6 font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-500 dark:from-cyan-400 dark:to-cyan-300">
              {t('skills.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
              {t('skills.description')}
            </p>
          </div>
        </div>
      </div>
      {/* Skills Cards - Updated to match nav color scheme */}
      <div className="relative -top-20 sm:-top-24 min-h-fit flex flex-col sm:flex-row justify-center mx-auto 
                      bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg p-6 sm:p-8 w-11/12 md:w-5/6 lg:w-3/4 
                      rounded-3xl shadow-xl shadow-cyan-300/50 dark:shadow-slate-900/50 border border-cyan-200/50 dark:border-slate-700/50
                      transform transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-400/30 dark:hover:shadow-slate-800/30">

        {/* Frontend Card */}
        <div className="flex-1 text-center p-6 transition-all duration-300 hover:scale-[1.02] group">
          <div className="relative w-20 h-20 mx-auto mb-6 group-hover:rotate-6 transition-transform duration-300">
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 group-hover:bg-cyan-500/20 transition-all duration-300"></div>
            <Image
              className="rounded-full dark:bg-transparent relative z-10"
              src="/front-end.webp"
              width={80}
              height={80}
              alt="Front-End"
              priority
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <h3 className="text-cyan-700 dark:text-cyan-400 text-2xl font-semibold mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
            {t('skills.frontEnd')}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
            {t('skills.frontEndDescription')}
          </p>

          <div className="text-left px-2">
            <h4 className="text-cyan-900 dark:text-cyan-300 font-medium mb-3 text-base sm:text-lg border-b border-cyan-200 dark:border-slate-700 pb-1">
              {t('skills.languages')}
            </h4>
            <ul className="space-y-2 text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              {['HTML5', 'CSS3', 'JavaScript', 'TypeScript'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-left px-2">
            <h4 className="text-cyan-900 dark:text-cyan-300 font-medium mb-3 text-base sm:text-lg border-b border-cyan-200 dark:border-slate-700 pb-1">
              {t('skills.frameworks')}
            </h4>
            <ul className="space-y-2 text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              {['React.js', 'Next.js', 'Redux / RTK Query', 'Tailwind CSS', 'MUI', 'Shadcn UI'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Backend Card */}
        <div className="flex-1 text-center p-6 border-t sm:border-t-0 sm:border-x border-cyan-200/50 dark:border-slate-700/50 
                        transition-all duration-300 hover:scale-[1.02] group">
          <div className="relative w-20 h-20 mx-auto mb-6 group-hover:-rotate-6 transition-transform duration-300">
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 group-hover:bg-cyan-500/20 transition-all duration-300"></div>
            <Image
              className="rounded-full dark:bg-transparent relative z-10"
              src="/back-end.webp"
              width={80}
              height={80}
              alt="Back-End"
              priority
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <h3 className="text-cyan-700 dark:text-cyan-400 text-2xl font-semibold mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
            {t('skills.backEnd')}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
            {t('skills.backEndDescription')}
          </p>

          <div className="text-left px-2">
            <h4 className="text-cyan-900 dark:text-cyan-300 font-medium mb-3 text-base sm:text-lg border-b border-cyan-200 dark:border-slate-700 pb-1">
              {t('skills.languages')}
            </h4>
            <ul className="space-y-2 text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              {['JavaScript', 'TypeScript', 'Go'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-left px-2">
            <h4 className="text-cyan-900 dark:text-cyan-300 font-medium mb-3 text-base sm:text-lg border-b border-cyan-200 dark:border-slate-700 pb-1">
              {t('skills.runtime')}
            </h4>
            <ul className="space-y-2 text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              {['Node.js', 'Express.js', 'NestJS', 'BullMQ'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Others Card */}
        <div className="flex-1 text-center p-6 transition-all duration-300 hover:scale-[1.02] group">
          <div className="relative w-20 h-20 mx-auto mb-6 group-hover:rotate-3 transition-transform duration-300">
            <div className="absolute inset-0 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 group-hover:bg-cyan-500/20 transition-all duration-300"></div>
            <Image
              className="rounded-full dark:bg-transparent relative z-10"
              src="/other-tools.webp"
              width={80}
              height={80}
              alt="Other Tools"
              priority
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <h3 className="text-cyan-700 dark:text-cyan-400 text-2xl font-semibold mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
            {t('skills.devOps')}
          </h3>
          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base mb-6 leading-relaxed">
            {t('skills.devOpsDescription')}
          </p>

          <div className="text-left px-2">
            <h4 className="text-cyan-900 dark:text-cyan-300 font-medium mb-3 text-base sm:text-lg border-b border-cyan-200 dark:border-slate-700 pb-1">
              {t('skills.databases')}
            </h4>
            <ul className="space-y-2 text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              {['PostgreSQL', 'MySQL', 'MongoDB', 'Prisma', 'Drizzle ORM'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-left px-2">
            <h4 className="text-cyan-900 dark:text-cyan-300 font-medium mb-3 text-base sm:text-lg border-b border-cyan-200 dark:border-slate-700 pb-1">
              {t('skills.devOpsTools')}
            </h4>
            <ul className="space-y-2 text-slate-800 dark:text-slate-200 text-sm sm:text-base">
              {['Docker', 'Podman', 'NGINX', 'Git', 'Bitbucket', 'Jenkins', 'AWS SQS'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills