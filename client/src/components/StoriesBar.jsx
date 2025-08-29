// import React, { useEffect, useState } from 'react'
// import { dummyStoriesData } from '../assets/assets'
// import { Plus } from 'lucide-react'

// const StoriesBar = () => {
//     const [stories,setStories]=useState([])
//     const fetchStories=async ()=>{
//         setStories(dummyStoriesData)
//     }
//     useEffect(()=>{
//             fetchStories()  
//     },[])
//   return (
//     <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scroll overflow-x auto px-4' >
//         <div className='flex gap-4 pb-5'>
//             {/* Add Stories Card  */}
//             <div className='rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from bg-indigo-50 to-white'>
//                 <div className='h-full flex flex-col items-center justify-center p-4 '>
//                     <div className='size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3'>
//                     <Plus className='w-5 h-5 text-white '/>
//                     </div>
//                 <p className='text-sm  font-medium text-slate-700 text-center '>Create Story</p>
//                 </div>
//             </div>
//             {/* Story Card  */}
//             {
//                 stories.map((story,index)=>{
//                     <div key={index} className={`relative rounded-lg shadow min-w-30 max-w-300 max-h-40 cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-700 hover:from-indigo-700 hover:to-purple-800 active:scale-95`}>
//                         <img src={story.user.profile_picture} alt="" className='absolute size-8 top-3 left-3 z-10 rounded-full ring ring-gray-100 shadow'/>
//                         <p className='absolute top-18 left-3 text-white/60 text-sm turnicate max-w-24'>{story.content}</p>
//                         <p className='text-white absolute bottom-1 right-2 z-10 text-xs'>{}story.createdAt</p>
//                     </div>
//                 })
//             }   
//         </div>
//     </div>
//   )
// }

// export default StoriesBar




import React, { useEffect, useState } from 'react'
import { dummyStoriesData } from '../assets/assets'
import { Plus } from 'lucide-react'
import moment from 'moment/moment'
import StoryModal from './storyModal'

const StoriesBar = () => {
  const [stories, setStories] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [viewStory, setViewStory] = useState(false)

  const fetchStories = async () => {
    setStories(dummyStoriesData)
  }

  useEffect(() => {
    fetchStories()
  }, [])

  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl overflow-x-auto no-scrollbar px-4">
      <div className="flex gap-4 pb-5">
        {/* ➕ Create Story Card */}
        <div onClick={()=>setShowModal(true)}className="flex-shrink-0 rounded-lg shadow-sm w-28 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white">
          <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3">
              <Plus className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-medium text-slate-700 text-center">
              Create Story
            </p>
          </div>
        </div>

        {/* 📖 Story Cards */}
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 rounded-lg shadow-md w-28 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95 overflow-hidden"
          >
            {/* User profile pic */}
            <img
              src={story.user.profile_picture}
              alt={story.user.name}
              className="absolute size-8 top-3 left-3 z-10 rounded-full ring-2 ring-white shadow"
            />

            {/* Story content */}
            <p className="absolute top-14 left-3 text-white/70 text-sm truncate max-w-[6rem]">
              {story.content}
            </p>

            {/* Time */}
            <p className="absolute bottom-1 right-2 z-10 text-xs text-white/80">
              {moment(story.createdAt).fromNow()}
            </p>
            {
                story.media_type!=='text' &&(
                    <div className='absolute inset-0 z-0 rounded-lg bg-black overflow-hidden'>
                        {
                        story.media_type==="image"?
                        <img src={story.media_url} alt="" className='h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80'/>
                        :
                        <video src={story.media_url} className='h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80'></video>
                        } 
                    </div>
                )
            }
            
          </div>
        ))}
      </div>

      {/* Add Story Modals  */}
      {showModal && <StoryModal setShowModal={setShowModal} fetchStories={fetchStories} />}

    </div>
  )
}

export default StoriesBar
