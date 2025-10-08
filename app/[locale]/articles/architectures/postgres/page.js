"use client"
import { useState } from 'react';
import {
  MdStorage,
  MdDns,
  MdSdStorage,
  MdMemory,
  MdDescription,
  MdLock,
  MdBolt,
  MdGroup,
  MdArrowDownward,
  MdArrowForward,
  MdCheckCircle
} from 'react-icons/md';

export default function PostgreSQLArchitecture() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const ComponentCard = ({ icon: Icon, title, description, details, color, onClick }) => (
    <div
      onClick={onClick}
      className={`bg-white dark:bg-slate-700 rounded-lg p-4 border-2 ${color} shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className={`p-2 rounded-lg ${color.replace('border', 'bg').replace('500', '100')}`}>
          <Icon className={color.replace('border', 'text')} size={24} />
        </div>
        <h3 className="font-bold text-gray-800 dark:text-white">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      {details && (
        <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 space-y-1">
          {details.map((detail, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className={`${color.replace('border', 'text')} mt-0.5`}>•</span>
              <span>{detail}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const ProcessBox = ({ icon: Icon, title, subtitle, color }) => (
    <div className={`bg-white dark:bg-slate-700 rounded-lg p-3 border-2 ${color} shadow-md text-center`}>
      <div className={`inline-flex p-2 rounded-lg ${color.replace('border', 'bg').replace('500', '100')} mb-2`}>
        <Icon className={color.replace('border', 'text')} size={20} />
      </div>
      <div className="font-semibold text-sm text-gray-800 dark:text-white">{title}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{subtitle}</div>
    </div>
  );

  const FlowStep = ({ number, title, description }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white dark:bg-slate-700 rounded-xl p-4 border-2 border-purple-500 shadow-lg min-w-[180px]">
        <div className="flex justify-center mb-2">
          <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
            {number}
          </div>
        </div>
        <div className="text-center">
          <div className="font-bold text-gray-800 dark:text-white mb-1">{title}</div>
          <div className="text-xs text-gray-600 dark:text-gray-300">{description}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MdStorage className="text-blue-600 dark:text-blue-400" size={48} />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">PostgreSQL Architecture</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">Complete guide to understanding PostgreSQL's internal structure</p>
        </div>

        {/* Architecture Flow */}
        <div className="space-y-6">
          
          {/* CLIENT LAYER */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                <MdGroup className="inline mr-2" size={24} />
                CLIENT LAYER
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ComponentCard
                icon={MdGroup}
                title="Application Clients"
                description="Any application that needs to interact with the database"
                details={[
                  "Web apps (Node.js, Python, PHP)",
                  "Mobile apps (iOS, Android)",
                  "Desktop applications",
                  "Connects via drivers (psycopg2, JDBC, node-postgres)"
                ]}
                color="border-blue-500"
              />
              <ComponentCard
                icon={MdBolt}
                title="Connection Protocol"
                description="PostgreSQL wire protocol handles communication"
                details={[
                  "TCP/IP on port 5432 (default)",
                  "Unix domain sockets for local connections",
                  "SSL/TLS encryption support",
                  "Binary protocol for efficiency"
                ]}
                color="border-blue-500"
              />
              <ComponentCard
                icon={MdDns}
                title="Connection Pooler"
                description="Manages connections efficiently to handle more users"
                details={[
                  "PgBouncer: Lightweight pooler",
                  "Reduces memory overhead",
                  "Session, transaction, statement pooling",
                  "Enables thousands of connections"
                ]}
                color="border-blue-500"
              />
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <MdArrowDownward size={32} className="animate-bounce" />
            <span className="text-sm font-medium mt-2">Connection Request</span>
          </div>

          {/* PROCESS LAYER */}
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border-2 border-red-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                <MdMemory className="inline mr-2" size={24} />
                PROCESS ARCHITECTURE
              </div>
            </div>

            {/* Postmaster */}
            <div className="mb-6">
              <div className="bg-white dark:bg-slate-700 rounded-xl p-6 border-2 border-red-600 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <MdDns className="text-red-600" size={32} />
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 dark:text-white">Postmaster (Main Supervisor)</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">The parent process that controls everything</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="font-semibold text-red-700">Listens</div>
                    <div className="text-gray-600">For connections on port 5432</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="font-semibold text-red-700">Spawns</div>
                    <div className="text-gray-600">Backend processes for clients</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="font-semibold text-red-700">Manages</div>
                    <div className="text-gray-600">Background worker processes</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <div className="font-semibold text-red-700">Recovers</div>
                    <div className="text-gray-600">Database after crashes</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Backend Processes */}
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                  <MdMemory size={20} className="text-red-600" />
                  Backend Processes (One per Connection)
                </h4>
                <div className="space-y-2">
                  <ProcessBox icon={MdMemory} title="Backend 1" subtitle="Client 1" color="border-red-500" />
                  <ProcessBox icon={MdMemory} title="Backend 2" subtitle="Client 2" color="border-red-500" />
                  <ProcessBox icon={MdMemory} title="Backend N" subtitle="Client N" color="border-red-500" />
                </div>
                <div className="mt-3 bg-white dark:bg-slate-600 p-3 rounded-lg border border-red-300 text-xs text-gray-600 dark:text-gray-200">
                  <strong>Key Point:</strong> Each client connection gets its own dedicated process. This provides isolation - if one backend crashes, others are unaffected.
                </div>
              </div>

              {/* Background Workers */}
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-3 flex items-center gap-2">
                  <MdDns size={20} className="text-red-600" />
                  Background Workers (Maintenance)
                </h4>
                <div className="space-y-2">
                  <ProcessBox icon={MdDescription} title="Background Writer" subtitle="Writes dirty buffers to disk" color="border-red-500" />
                  <ProcessBox icon={MdCheckCircle} title="Checkpointer" subtitle="Creates recovery checkpoints" color="border-red-500" />
                  <ProcessBox icon={MdDescription} title="WAL Writer" subtitle="Writes transaction log" color="border-red-500" />
                  <ProcessBox icon={MdStorage} title="Autovacuum" subtitle="Cleans up old data" color="border-red-500" />
                </div>
                <div className="mt-3 bg-white dark:bg-slate-600 p-3 rounded-lg border border-red-300 text-xs text-gray-600 dark:text-gray-200">
                  <strong>Key Point:</strong> Background workers run continuously to maintain database health, write data to disk, and clean up old row versions.
                </div>
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <MdArrowDownward size={32} className="animate-bounce" />
            <span className="text-sm font-medium mt-2">Processes Access Memory & Storage</span>
          </div>

          {/* MEMORY LAYER */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 border-2 border-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-amber-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                <MdMemory className="inline mr-2" size={24} />
                MEMORY ARCHITECTURE
              </div>
            </div>

            {/* Shared Memory */}
            <div className="mb-4">
              <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-center text-lg">Shared Memory (All Processes Can Access)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-slate-700 rounded-lg p-5 border-2 border-amber-600 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <MdStorage className="text-amber-600" size={28} />
                    <h3 className="font-bold text-lg text-gray-800 dark:text-white">Shared Buffers</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">The main data cache - stores frequently accessed table and index pages</p>
                  <div className="space-y-2 text-xs text-gray-600 dark:text-gray-300">
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>Size:</strong> Typically 25% of total RAM
                    </div>
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>Page Size:</strong> Stores 8KB data pages
                    </div>
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>Purpose:</strong> Reduces disk I/O by caching hot data
                    </div>
                    <div className="bg-amber-50 p-2 rounded">
                      <strong>Goal:</strong> 99%+ buffer cache hit ratio
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <ComponentCard
                    icon={MdDescription}
                    title="WAL Buffers"
                    description="Temporary storage for transaction log before disk write"
                    details={[
                      "Small buffer (auto-sized)",
                      "Flushed on commit for durability"
                    ]}
                    color="border-amber-500"
                  />
                  <ComponentCard
                    icon={MdLock}
                    title="Lock Tables"
                    description="Manages locks for concurrent transactions"
                    details={[
                      "Table-level locks",
                      "Row-level locks",
                      "Deadlock detection"
                    ]}
                    color="border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Local Memory */}
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-center text-lg">Local Memory (Per Backend Process)</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <ComponentCard
                  icon={MdBolt}
                  title="work_mem"
                  description="Memory for query operations like sorting and joins"
                  details={[
                    "Used per operation (sort, hash)",
                    "Complex queries use multiple times",
                    "If exceeded, spills to disk (slow!)",
                    "Default: 4MB, tune based on queries"
                  ]}
                  color="border-amber-500"
                />
                <ComponentCard
                  icon={MdStorage}
                  title="maintenance_work_mem"
                  description="Memory for maintenance operations"
                  details={[
                    "Used by VACUUM, CREATE INDEX",
                    "Larger = faster maintenance",
                    "Typical: 256MB - 2GB",
                    "Split among autovacuum workers"
                  ]}
                  color="border-amber-500"
                />
                <ComponentCard
                  icon={MdDescription}
                  title="temp_buffers"
                  description="Cache for temporary tables"
                  details={[
                    "Only for temp tables",
                    "Private to each backend",
                    "Default: 8MB",
                    "Released when session ends"
                  ]}
                  color="border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
            <MdArrowDownward size={32} className="animate-bounce" />
            <span className="text-sm font-medium mt-2">Memory Backed by Persistent Storage</span>
          </div>

          {/* STORAGE LAYER */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border-2 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                <MdSdStorage className="inline mr-2" size={24} />
                STORAGE LAYER (Disk)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data Files */}
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Data Files</h4>
                <div className="space-y-3">
                  <ComponentCard
                    icon={MdStorage}
                    title="Table Files"
                    description="Heap files containing actual row data"
                    details={[
                      "Organized in 8KB pages",
                      "Split into 1GB segment files",
                      "Each table is separate file",
                      "Unordered tuple storage"
                    ]}
                    color="border-green-500"
                  />
                  <ComponentCard
                    icon={MdDescription}
                    title="Index Files"
                    description="B-tree, Hash, GiST, GIN indexes"
                    details={[
                      "Speed up data retrieval",
                      "Separate file per index",
                      "Automatically maintained",
                      "Also use 8KB pages"
                    ]}
                    color="border-green-500"
                  />
                </div>
              </div>

              {/* Transaction Logs */}
              <div>
                <h4 className="font-bold text-gray-800 dark:text-white mb-3">Transaction & System Files</h4>
                <div className="space-y-3">
                  <div className="bg-white dark:bg-slate-700 rounded-lg p-4 border-2 border-green-600 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <MdDescription className="text-green-600" size={24} />
                      <h3 className="font-bold text-gray-800 dark:text-white">Write-Ahead Log (WAL)</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">Sequential log of ALL database changes</p>
                    <div className="space-y-1 text-xs text-gray-600 dark:text-gray-400">
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>Durability:</strong> Changes logged before data modified</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>Crash Recovery:</strong> Replay WAL to restore state</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>Replication:</strong> Ship WAL to standby servers</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-green-600">✓</span>
                        <span><strong>Backups:</strong> Point-in-time recovery</span>
                      </div>
                    </div>
                  </div>
                  <ComponentCard
                    icon={MdCheckCircle}
                    title="Commit Log (CLOG)"
                    description="Tracks which transactions are committed/aborted"
                    details={[
                      "2 bits per transaction",
                      "Essential for MVCC visibility",
                      "Heavily cached in memory"
                    ]}
                    color="border-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Query Processing Pipeline */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                <MdBolt className="inline mr-2" size={24} />
                QUERY PROCESSING PIPELINE
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
              <FlowStep number="1" title="Parser" description="SQL → Parse Tree" />
              <MdArrowForward className="text-purple-500" size={32} />
              <FlowStep number="2" title="Rewriter" description="Apply Rules & Views" />
              <MdArrowForward className="text-purple-500 hidden md:block" size={32} />
              <FlowStep number="3" title="Planner" description="Optimize Strategy" />
              <MdArrowForward className="text-purple-500" size={32} />
              <FlowStep number="4" title="Executor" description="Execute & Return" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-purple-300">
                <div className="font-bold text-purple-700 dark:text-purple-400 mb-2">1. Parser</div>
                <p className="text-gray-600 dark:text-gray-300">Converts SQL text to structured tree, checks syntax and semantics</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-purple-300">
                <div className="font-bold text-purple-700 dark:text-purple-400 mb-2">2. Rewriter</div>
                <p className="text-gray-600 dark:text-gray-300">Expands views, applies rules, normalizes query structure</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-purple-300">
                <div className="font-bold text-purple-700 dark:text-purple-400 mb-2">3. Planner</div>
                <p className="text-gray-600 dark:text-gray-300">Cost-based optimization, chooses best execution plan using statistics</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border border-purple-300">
                <div className="font-bold text-purple-700 dark:text-purple-400 mb-2">4. Executor</div>
                <p className="text-gray-600 dark:text-gray-300">Executes plan, reads from buffers/disk, returns results to client</p>
              </div>
            </div>
          </div>

          {/* MVCC */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border-2 border-orange-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                <MdStorage className="inline mr-2" size={24} />
                MVCC - Multi-Version Concurrency Control
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-lg p-5 border-2 border-orange-400 mb-4">
              <p className="text-gray-700 dark:text-gray-200 text-center text-lg mb-2">
                <strong>Key Concept:</strong> Instead of locking rows, PostgreSQL keeps multiple versions of each row
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                This allows readers and writers to work simultaneously without blocking each other!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">How It Works</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Each row has xmin (created by) and xmax (deleted by) transaction IDs</li>
                  <li>• UPDATE creates new version, marks old as deleted</li>
                  <li>• DELETE marks row as deleted (doesn't remove it)</li>
                  <li>• Each transaction sees consistent snapshot</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Benefits</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Readers NEVER block writers</li>
                  <li>• Writers NEVER block readers</li>
                  <li>• High concurrency for read-heavy workloads</li>
                  <li>• Consistent snapshots without locks</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-orange-700 dark:text-orange-400 mb-2">Maintenance</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• VACUUM removes old row versions</li>
                  <li>• Prevents table bloat</li>
                  <li>• Autovacuum runs automatically</li>
                  <li>• Essential for performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-6 border-2 border-indigo-500">
            <h3 className="font-bold text-xl text-gray-800 dark:text-gray-800 mb-4 text-center">🎯 Key Takeaways</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Process Model</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">One backend process per connection provides isolation and stability. Connection poolers help manage many connections efficiently.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">Memory Hierarchy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Shared buffers cache data pages. Local memory (work_mem) affects query performance. Tune based on workload.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">WAL = Durability</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Write-Ahead Log ensures no data loss. Changes written to WAL before data files. Enables crash recovery and replication.</p>
              </div>
              <div className="bg-white dark:bg-slate-700 p-4 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-700 dark:text-indigo-400 mb-2">MVCC = Concurrency</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Multiple row versions allow high concurrency. Readers don't block writers. VACUUM cleans up old versions.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}