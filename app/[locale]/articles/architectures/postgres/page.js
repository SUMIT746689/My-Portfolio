import {
  MdStorage,
  MdDns,
  MdMemory,
  MdDescription,
  MdGroup,
  MdArrowDownward,
  MdCheckCircle,
  MdBolt
} from 'react-icons/md';
import ArchitectureDiagram from '../../../../../components/ArchitectureDiagram';
import { getTranslations } from 'next-intl/server';

export { generateMetadata } from './metadata';

export default async function PostgreSQLArchitecture() {
  const t = await getTranslations('articles.postgres');

  const DiagramNode = ({ children, className, label }) => (
    <div className={`relative ${className}`}>
      <div className="rounded-lg px-4 py-3 border-2 shadow-md text-center !bg-white dark:!bg-slate-700 border-gray-300 dark:border-gray-600">
        {children}
      </div>
      {label && (
        <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
          {label}
        </div>
      )}
    </div>
  );

  const Arrow = ({ direction = "down", label }) => (
    <div className="flex flex-col items-center justify-center py-2">
      <MdArrowDownward
        className={`text-pink-600 dark:text-pink-400 ${direction === 'up' ? 'rotate-180' : ''}`}
        size={24}
      />
      {label && <span className="text-xs dark:text-gray-200 mt-1 font-medium">{label}</span>}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <article className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <MdStorage className="text-pink-600 dark:text-pink-400" size={40} />
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              {t('title')}
            </h1>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            {t('description')}
          </p>
          <div className="flex gap-3 mt-4 text-sm text-gray-600 dark:text-gray-300">
            <span>{t('lastUpdated')}</span>
            <span>•</span>
            <span>{t('readTime')}</span>
          </div>
        </header>

        {/* Architecture Diagram */}
        <ArchitectureDiagram title={t('diagramTitle')}>
          <div className="space-y-4">
            {/* Client */}
            <div className="flex justify-center">
              <DiagramNode className="w-48" label="">
                <MdGroup className="inline text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <span className="font-semibold text-gray-900 dark:text-white">{t('diagram.clientApplication')}</span>
              </DiagramNode>
            </div>

            <Arrow label={t('diagram.connectionRequest')} />

            {/* Postmaster */}
            <div className="flex justify-center">
              <DiagramNode className="w-56" label="">
                <MdDns className="inline text-red-600 dark:text-red-400 mr-2" size={24} />
                <span className="font-semibold text-gray-900 dark:text-white">{t('diagram.postmaster')}</span>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{t('diagram.mainSupervisor')}</div>
              </DiagramNode>
            </div>

            <Arrow label={t('diagram.spawnsBackend')} />

            {/* Backend Process */}
            <div className="flex justify-center">
              <DiagramNode className="w-52" label="">
                <MdMemory className="inline text-purple-600 dark:text-purple-400 mr-2" size={24} />
                <span className="font-semibold text-gray-900 dark:text-white">{t('diagram.backendProcess')}</span>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">{t('diagram.onePerConnection')}</div>
              </DiagramNode>
            </div>

            <Arrow label={t('diagram.accessesMemory')} />

            {/* Shared Memory */}
            <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-4 border-2 border-amber-500">
              <div className="text-center font-bold text-amber-900 dark:text-amber-200 mb-3">
                {t('diagram.sharedBufferPool')}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-amber-200 dark:bg-amber-800 rounded p-2 text-xs text-center text-amber-900 dark:text-amber-100">
                  {t('diagram.sharedBuffers')}
                </div>
                <div className="bg-pink-200 dark:bg-pink-800 rounded p-2 text-xs text-center text-pink-900 dark:text-pink-100">
                  {t('diagram.clogBuffer')}
                </div>
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  {t('diagram.walBuffer')}
                </div>
              </div>
            </div>

            <Arrow label={t('diagram.persistsToDisk')} />

            {/* On Disk */}
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border-2 border-green-500">
              <div className="text-center font-bold text-green-900 dark:text-green-200 mb-3">
                {t('diagram.onDiskStorage')}
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  <MdStorage className="inline mb-1" size={16} />
                  <div>{t('diagram.dataFiles')}</div>
                </div>
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  <MdDescription className="inline mb-1" size={16} />
                  <div>{t('diagram.walFiles')}</div>
                </div>
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  <MdCheckCircle className="inline mb-1" size={16} />
                  <div>{t('diagram.archiveLogs')}</div>
                </div>
              </div>
            </div>

            {/* Background Workers */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                t('diagram.checkpointer'),
                t('diagram.walWriter'),
                t('diagram.autovacuum'),
                t('diagram.statsCollector')
              ].map(worker => (
                <div key={worker} className="bg-yellow-100 dark:bg-yellow-900/30 rounded px-3 py-2 text-xs text-center border border-yellow-400 text-yellow-900 dark:text-yellow-100">
                  {worker}
                </div>
              ))}
            </div>
          </div>
        </ArchitectureDiagram>

        {/* Content Sections */}
        <div className="prose prose-slate dark:prose-invert max-w-none">

          {/* Process Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MdDns className="text-red-600 dark:text-red-400" size={28} />
              {t('processArchitecture.title')}
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('processArchitecture.postmaster.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                {t('processArchitecture.postmaster.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 rounded p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">{t('processArchitecture.postmaster.responsibilities')}</h4>
                  <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                    {t.raw('processArchitecture.postmaster.items').map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">{t('processArchitecture.postmaster.keyPoint')}</h4>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    {t('processArchitecture.postmaster.keyPointText')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('processArchitecture.backend.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                {t('processArchitecture.backend.description')}
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-4">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">{t('processArchitecture.backend.processModel')}</h4>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-2">
                  {t.raw('processArchitecture.backend.items').map((item, i) => (
                    <li key={i}>✓ <strong>{item.split(':')[0]}:</strong>{item.split(':')[1]}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('processArchitecture.workers.title')}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['backgroundWriter', 'checkpointer', 'walWriter', 'autovacuum'].map(worker => (
                  <div key={worker} className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{t(`processArchitecture.workers.${worker}.title`)}</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-200">{t(`processArchitecture.workers.${worker}.description`)}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Memory Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MdMemory className="text-amber-600 dark:text-amber-400" size={28} />
              {t('memoryArchitecture.title')}
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('memoryArchitecture.sharedBuffers.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                {t('memoryArchitecture.sharedBuffers.description')}
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3">
                  <div className="font-semibold text-amber-700 dark:text-amber-300 mb-1">{t('memoryArchitecture.sharedBuffers.size')}</div>
                  <div className="text-sm text-gray-800 dark:text-gray-200">{t('memoryArchitecture.sharedBuffers.sizeValue')}</div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3">
                  <div className="font-semibold text-amber-700 dark:text-amber-300 mb-1">{t('memoryArchitecture.sharedBuffers.pageSize')}</div>
                  <div className="text-sm text-gray-800 dark:text-gray-200">{t('memoryArchitecture.sharedBuffers.pageSizeValue')}</div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3">
                  <div className="font-semibold text-amber-700 dark:text-amber-300 mb-1">{t('memoryArchitecture.sharedBuffers.goal')}</div>
                  <div className="text-sm text-gray-800 dark:text-gray-200">{t('memoryArchitecture.sharedBuffers.goalValue')}</div>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-4 border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>{t('memoryArchitecture.sharedBuffers.configuration')}</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-900 dark:text-gray-100">{t('memoryArchitecture.sharedBuffers.configValue')}</code> in postgresql.conf
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('memoryArchitecture.localMemory.title')}
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 dark:border-amber-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('memoryArchitecture.localMemory.workMem.title')}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
                    {t('memoryArchitecture.localMemory.workMem.description')}
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3 text-sm text-gray-800 dark:text-gray-200">
                    <strong>{t('memoryArchitecture.localMemory.workMem.important')}</strong> {t('memoryArchitecture.localMemory.workMem.importantText')}
                  </div>
                </div>
                <div className="border-l-4 border-amber-500 dark:border-amber-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('memoryArchitecture.localMemory.maintenanceWorkMem.title')}</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    {t('memoryArchitecture.localMemory.maintenanceWorkMem.description')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Storage Layer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MdStorage className="text-green-600 dark:text-green-400" size={28} />
              {t('storageLayer.title')}
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('storageLayer.wal.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                {t('storageLayer.wal.description')}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">{t('storageLayer.wal.howItWorks')}</h4>
                  <ol className="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-decimal list-inside">
                    {t.raw('storageLayer.wal.howItWorksItems').map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">{t('storageLayer.wal.benefits')}</h4>
                  <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                    {t.raw('storageLayer.wal.benefitsItems').map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {t('storageLayer.dataFiles.title')}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                {t('storageLayer.dataFiles.description')}
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-4 border border-gray-300 dark:border-gray-600">
                <code className="text-sm text-gray-900 dark:text-gray-100">
                  /var/lib/postgresql/data/base/&lt;database_oid&gt;/&lt;table_oid&gt;
                </code>
              </div>
            </div>
          </section>

          {/* MVCC */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MdBolt className="text-orange-600 dark:text-orange-400" size={28} />
              {t('mvcc.title')}
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500 dark:border-orange-400 mb-6">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {t('mvcc.keyConcept')}
                </p>
                <p className="text-gray-700 dark:text-gray-200">
                  {t('mvcc.keyConceptDescription')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('mvcc.howItWorks')}</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    {t.raw('mvcc.howItWorksItems').map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('mvcc.benefits')}</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    {t.raw('mvcc.benefitsItems').map((item, i) => (
                      <li key={i}>✓ {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{t('mvcc.tradeoffs')}</h4>
                  <ul className="text-sm text-gray-700 dark:text-gray-200 space-y-1">
                    {t.raw('mvcc.tradeoffsItems').map((item, i) => (
                      <li key={i}>⚠ {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-6 border-2 border-pink-300 dark:border-pink-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{t('keyTakeaways.title')}</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                {t.raw('keyTakeaways.items').map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <MdCheckCircle className="text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" size={20} />
                    <div className="text-gray-800 dark:text-gray-100">
                      <strong className="text-gray-900 dark:text-white">{item.title}</strong> {item.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
