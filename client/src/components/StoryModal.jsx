import { ArrowLeft, Sparkle, Type, Upload } from 'lucide-react';
import React, { useState } from 'react';

const StoryModal = ({ setShowModal, fetchStories }) => {
  const bgColors = [
    "#4f46e5", // indigo
    "#7c3aed", // violet
    "#db2777", // pink
    "#2563eb", // blue
    "#16a34a", // green
    "#ea580c", // orange
    "#ca8a04", // yellow
    "#f97316", // amber
    "#0d9488", // teal
    "#6b7280", // gray
    "#dc2626", // red
    "#06b6d4", // cyan
    "#65a30d", // lime
    "#be123c"  // rose
  ];

  const [mode, setMode] = useState("text");
  const [background, setBackground] = useState(bgColors[0]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);
      setPreviewUrl(URL.createObjectURL(file));
      setMode("media");
    }
  };

  return (
    <div className="fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-4 flex items-center justify-between">
          <button onClick={() => setShowModal(false)} className="text-white p-2 cursor-pointer">
            <ArrowLeft />
          </button>
          <h2 className="text-lg font-semibold">Create Story</h2>
          <span className="w-10"></span>
        </div>

        {/* Preview Area */}
        <div
          className="rounded-lg h-96 flex items-center justify-center relative"
          style={{ backgroundColor: background }}
        >
          {mode === "text" && (
            <textarea
              className="bg-transparent text-white w-full h-full p-6 text-lg resize-none focus:outline-none"
              placeholder="What's on your mind?"
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          )}

          {mode === "media" && previewUrl && (
            media?.type.startsWith("image") ? (
              <img src={previewUrl} alt="preview" className="object-contain max-h-full" />
            ) : (
              <video src={previewUrl} controls className="object-contain max-h-full" />
            )
          )}
        </div>

        {/* Background Picker */}
        <div className="flex mt-4 gap-2 flex-wrap">
          {bgColors.map((color) => (
            <button
              key={color}
              className="w-6 h-6 rounded-full ring cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => setBackground(color)}
            />
          ))}
        </div>

        {/* Mode Switch Buttons */}
        <div className='flex gap-2 mt-4'>
          <button 
            onClick={() => { setMode('text'); setMedia(null); setPreviewUrl(null); }} 
            className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'text' ? "bg-white text-black" : "bg-zinc-800"}`}
          >
            <Type size={18}/> Text
          </button>

          <label className={`flex-1 flex items-center justify-center gap-2 p-2 rounded cursor-pointer ${mode === 'media' ? "bg-white text-black" : "bg-zinc-800"}`}>
            <input 
              onChange={handleMediaUpload} 
              type="file" 
              accept="image/*,video/*" 
              className="hidden"
            />
            <Upload size={18}/> Photo/Video
          </label>
        </div>
        <button className='flex items-center justify-center gap-2 text-white py-3 mt-4 w-full rounded bg-gradient-to-r from bg-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 active:scale-95 transition cursor-pointer'>
            <Sparkle/>Create Story
        </button>

      </div>
    </div>
  );
};

export default StoryModal;
