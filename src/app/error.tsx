'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">出错了！</h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-colors"
        >
          重试
        </button>
      </div>
    </div>
  );
} 