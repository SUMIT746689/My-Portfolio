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

export { generateMetadata } from './metadata';

export default function PostgreSQLArchitecture() {
  const DiagramNode = ({ children, className, label }) => (
    <div className={`relative ${className}`}>
      <div className="bg-white dark:bg-slate-700 rounded-lg px-4 py-3 border-2 border-gray-300 dark:border-gray-600 shadow-md text-center">
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
      {label && <span className="text-xs text-gray-700 dark:text-gray-200 mt-1 font-medium">{label}</span>}
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
              PostgreSQL Architecture
            </h1>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Understanding PostgreSQL's process and memory architecture
          </p>
          <div className="flex gap-3 mt-4 text-sm text-gray-600 dark:text-gray-300">
            <span>Last updated: Jan 2025</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </header>

        {/* Architecture Diagram */}
        <ArchitectureDiagram title="PostgreSQL Process and Memory Architecture">
          <div className="space-y-4">
            {/* Client */}
            <div className="flex justify-center">
              <DiagramNode className="w-48" label="">
                <MdGroup className="inline text-blue-600 dark:text-blue-400 mr-2" size={24} />
                <span className="font-semibold text-gray-900 dark:text-white">Client Application</span>
              </DiagramNode>
            </div>

            <Arrow label="Connection Request" />

            {/* Postmaster */}
            <div className="flex justify-center">
              <DiagramNode className="w-56" label="">
                <MdDns className="inline text-red-600 dark:text-red-400 mr-2" size={24} />
                <span className="font-semibold text-gray-900 dark:text-white">Postmaster</span>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">Main Supervisor</div>
              </DiagramNode>
            </div>

            <Arrow label="Spawns Backend" />

            {/* Backend Process */}
            <div className="flex justify-center">
              <DiagramNode className="w-52" label="">
                <MdMemory className="inline text-purple-600 dark:text-purple-400 mr-2" size={24} />
                <span className="font-semibold text-gray-900 dark:text-white">Backend Process</span>
                <div className="text-xs text-gray-600 dark:text-gray-300 mt-1">One per connection</div>
              </DiagramNode>
            </div>

            <Arrow label="Accesses Memory" />

            {/* Shared Memory */}
            <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg p-4 border-2 border-amber-500">
              <div className="text-center font-bold text-amber-900 dark:text-amber-200 mb-3">
                Shared Buffer Pool
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-amber-200 dark:bg-amber-800 rounded p-2 text-xs text-center text-amber-900 dark:text-amber-100">
                  Shared Buffers
                </div>
                <div className="bg-pink-200 dark:bg-pink-800 rounded p-2 text-xs text-center text-pink-900 dark:text-pink-100">
                  CLOG Buffer
                </div>
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  WAL Buffer
                </div>
              </div>
            </div>

            <Arrow label="Persists to Disk" />

            {/* On Disk */}
            <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-4 border-2 border-green-500">
              <div className="text-center font-bold text-green-900 dark:text-green-200 mb-3">
                On Disk Storage
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  <MdStorage className="inline mb-1" size={16} />
                  <div>Data Files</div>
                </div>
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  <MdDescription className="inline mb-1" size={16} />
                  <div>WAL Files</div>
                </div>
                <div className="bg-green-200 dark:bg-green-800 rounded p-2 text-xs text-center text-green-900 dark:text-green-100">
                  <MdCheckCircle className="inline mb-1" size={16} />
                  <div>Archive Logs</div>
                </div>
              </div>
            </div>

            {/* Background Workers */}
            <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { name: 'Checkpointer', color: 'yellow' },
                { name: 'WAL Writer', color: 'yellow' },
                { name: 'Autovacuum', color: 'yellow' },
                { name: 'Stats Collector', color: 'yellow' }
              ].map(worker => (
                <div key={worker.name} className="bg-yellow-100 dark:bg-yellow-900/30 rounded px-3 py-2 text-xs text-center border border-yellow-400 text-yellow-900 dark:text-yellow-100">
                  {worker.name}
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
              Process Architecture
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Postmaster - The Main Supervisor
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                The postmaster is PostgreSQL's parent process that controls all database operations. It listens for client connections on port 5432 (default) and manages all child processes.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 dark:bg-red-900/20 rounded p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Responsibilities</h4>
                  <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                    <li>• Accepts incoming connections</li>
                    <li>• Spawns backend processes</li>
                    <li>• Manages background workers</li>
                    <li>• Handles crash recovery</li>
                  </ul>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded p-4">
                  <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">Key Point</h4>
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    If the postmaster crashes, the entire PostgreSQL instance stops. It's the single point of control for the database cluster.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Backend Processes
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Each client connection gets its own dedicated backend process. This provides process isolation - if one backend crashes due to a bad query, other connections remain unaffected.
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-4">
                <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Process Per Connection Model</h4>
                <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-2">
                  <li>✓ <strong>Isolation:</strong> Each connection is independent</li>
                  <li>✓ <strong>Memory:</strong> Each backend has its own memory space</li>
                  <li>✓ <strong>Limitation:</strong> High memory usage with many connections</li>
                  <li>✓ <strong>Solution:</strong> Use connection poolers (PgBouncer, pgpool)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Background Worker Processes
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Background Writer</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200">Writes dirty buffers from shared memory to disk periodically</p>
                </div>
                <div className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Checkpointer</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200">Creates recovery checkpoints to minimize recovery time</p>
                </div>
                <div className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">WAL Writer</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200">Flushes Write-Ahead Log buffers to disk for durability</p>
                </div>
                <div className="border-l-4 border-yellow-500 dark:border-yellow-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Autovacuum</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200">Removes old row versions and prevents table bloat</p>
                </div>
              </div>
            </div>
          </section>

          {/* Memory Architecture */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MdMemory className="text-amber-600 dark:text-amber-400" size={28} />
              Memory Architecture
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Shared Buffers - The Data Cache
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                Shared buffers are PostgreSQL's main data cache, storing frequently accessed table and index pages in memory to avoid expensive disk I/O.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3">
                  <div className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Size</div>
                  <div className="text-sm text-gray-800 dark:text-gray-200">Typically 25% of total RAM</div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3">
                  <div className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Page Size</div>
                  <div className="text-sm text-gray-800 dark:text-gray-200">8KB data pages</div>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3">
                  <div className="font-semibold text-amber-700 dark:text-amber-300 mb-1">Goal</div>
                  <div className="text-sm text-gray-800 dark:text-gray-200">99%+ cache hit ratio</div>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded p-4 border-l-4 border-blue-500 dark:border-blue-400">
                <p className="text-sm text-gray-800 dark:text-gray-200">
                  <strong>Configuration:</strong> <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-900 dark:text-gray-100">shared_buffers = 8GB</code> in postgresql.conf
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Local Memory (Per Backend)
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 dark:border-amber-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">work_mem</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200 mb-2">
                    Memory allocated for query operations like sorting and hash joins. Each operation can use up to this amount.
                  </p>
                  <div className="bg-amber-50 dark:bg-amber-900/20 rounded p-3 text-sm text-gray-800 dark:text-gray-200">
                    <strong>Important:</strong> Complex queries may use work_mem multiple times (once per sort/hash operation). If exceeded, data spills to disk, causing major slowdowns.
                  </div>
                </div>
                <div className="border-l-4 border-amber-500 dark:border-amber-400 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">maintenance_work_mem</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-200">
                    Used by VACUUM, CREATE INDEX, and other maintenance operations. Larger values speed up maintenance tasks.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Storage Layer */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MdStorage className="text-green-600 dark:text-green-400" size={28} />
              Storage Layer
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Write-Ahead Log (WAL)
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                WAL is a sequential log of all database changes. It's the foundation of PostgreSQL's durability and replication.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 rounded p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">How It Works</h4>
                  <ol className="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-decimal list-inside">
                    <li>Change is written to WAL buffer</li>
                    <li>On COMMIT, WAL flushed to disk</li>
                    <li>Later, data pages updated on disk</li>
                    <li>If crash occurs, replay WAL to recover</li>
                  </ol>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 rounded p-4">
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">Benefits</h4>
                  <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
                    <li>✓ Guarantees durability (ACID)</li>
                    <li>✓ Fast crash recovery</li>
                    <li>✓ Point-in-time recovery</li>
                    <li>✓ Streaming replication</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Data Files
              </h3>
              <p className="text-gray-700 dark:text-gray-200 mb-4">
                PostgreSQL stores table data in heap files, organized into 8KB pages. Each table and index is stored in separate files, split into 1GB segments.
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
              <MdBolt className="text-orange-500" size={28} />
              MVCC - Multi-Version Concurrency Control
            </h2>

            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md border border-gray-200 dark:border-gray-700">
              <div className="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border-l-4 border-orange-500 mb-6">
                <p className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  Key Concept: Multiple row versions enable high concurrency
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Instead of locking rows, PostgreSQL keeps multiple versions. Readers see their transaction's snapshot, writers create new versions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">How It Works</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Each row has xmin (created) and xmax (deleted) transaction IDs</li>
                    <li>• UPDATE creates new version</li>
                    <li>• DELETE marks row deleted</li>
                    <li>• VACUUM removes old versions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Benefits</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>✓ Readers never block writers</li>
                    <li>✓ Writers never block readers</li>
                    <li>✓ High concurrency</li>
                    <li>✓ Consistent snapshots</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Trade-offs</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>⚠ Table bloat possible</li>
                    <li>⚠ VACUUM required</li>
                    <li>⚠ More disk space needed</li>
                    <li>⚠ Write amplification</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg p-6 border-2 border-pink-300 dark:border-pink-700">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Takeaways</h2>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <MdCheckCircle className="text-pink-500 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-gray-800 dark:text-white">Process per connection</strong> provides isolation but requires connection pooling at scale
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MdCheckCircle className="text-pink-500 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-gray-800 dark:text-white">Shared buffers</strong> cache hot data in memory to minimize disk I/O
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MdCheckCircle className="text-pink-500 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-gray-800 dark:text-white">WAL ensures durability</strong> and enables crash recovery and replication
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MdCheckCircle className="text-pink-500 mt-0.5 flex-shrink-0" size={20} />
                  <div>
                    <strong className="text-gray-800 dark:text-white">MVCC enables high concurrency</strong> but requires regular VACUUM maintenance
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
