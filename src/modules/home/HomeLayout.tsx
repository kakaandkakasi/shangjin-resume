import { motion } from 'framer-motion';
import Link from 'next/link';

const HomeLayout = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #0f0519 50%, #150520 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-10%',
            right: '-10%',
            width: '50%',
            height: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.25) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '30%',
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-8 py-6"
        style={{ maxWidth: '1400px', margin: '0 auto' }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
            style={{
              background: 'linear-gradient(135deg, #a855f7, #6366f1)',
              boxShadow: '0 4px 20px rgba(168, 85, 247, 0.4)',
            }}
          >
            清
          </div>
          <span className="text-white font-semibold text-lg">AI清道夫</span>
        </div>
        <Link
          href="/builder"
          className="px-6 py-2 rounded-full text-white font-medium transition-all hover:opacity-90"
          style={{
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
          }}
        >
          开始使用
        </Link>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm font-medium tracking-widest mb-6"
            style={{ color: 'rgba(168, 85, 247, 1)' }}
          >
            AI POWERED RESUME BUILDER
          </motion.p>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            AI清道夫
          </motion.h1>

          {/* Gradient text effect */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl font-bold mb-8"
            style={{
              background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Generate Your Future
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            选择你的目标职位，AI一键生成专业简历
            <br />
            让求职之路更加清晰
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Link href="/builder">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-4 rounded-full text-white font-semibold text-lg inline-flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #6366f1)',
                  boxShadow: '0 8px 30px rgba(168, 85, 247, 0.4)',
                }}
              >
                开始生成
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* 3D Card Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative"
        >
          {/* Glow effect behind card */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(99, 102, 241, 0.4))',
              filter: 'blur(40px)',
              transform: 'scale(1.1)',
            }}
          />

          {/* Card */}
          <motion.div
            whileHover={{ y: -10, rotateY: 5 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="relative rounded-2xl p-8 backdrop-blur-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              width: '500px',
            }}
          >
            {/* Resume preview mock */}
            <div className="space-y-4">
              <div
                className="h-8 rounded"
                style={{ background: 'linear-gradient(90deg, #a855f7, #6366f1)', width: '60%' }}
              />
              <div
                className="h-4 rounded"
                style={{ background: 'rgba(255,255,255,0.2)', width: '40%' }}
              />
              <div className="h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div className="space-y-2">
                <div
                  className="h-3 rounded"
                  style={{ background: 'rgba(255,255,255,0.15)', width: '90%' }}
                />
                <div
                  className="h-3 rounded"
                  style={{ background: 'rgba(255,255,255,0.15)', width: '75%' }}
                />
                <div
                  className="h-3 rounded"
                  style={{ background: 'rgba(255,255,255,0.15)', width: '85%' }}
                />
              </div>
              <div className="h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />
              <div className="space-y-2">
                <div
                  className="h-3 rounded"
                  style={{ background: 'rgba(168, 85, 247, 0.3)', width: '30%' }}
                />
                <div
                  className="h-3 rounded"
                  style={{ background: 'rgba(255,255,255,0.15)', width: '95%' }}
                />
                <div
                  className="h-3 rounded"
                  style={{ background: 'rgba(255,255,255,0.15)', width: '80%' }}
                />
              </div>
            </div>

            {/* AI badge */}
            <div
              className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                color: 'white',
              }}
            >
              AI 生成
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Footer text */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-gray-500 text-sm">由 kakasi & 卡卡 构建 · 赏金之路系列</p>
      </div>
    </motion.div>
  );
};

export default HomeLayout;
