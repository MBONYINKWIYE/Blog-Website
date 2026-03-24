import { useEffect, useState } from 'react'
import axiosClient from '../Services/GlobalApi'

const AllPost = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axiosClient.get('/blogs')
        setPosts(response.data.blogs)
      } catch {
        setError('Unable to load posts right now.')
      } finally {
        setLoading(false)
      }
    }

    getPost()
  }, [])

  if (loading) return <p className='p-6 bg-white rounded-xl'>Loading posts...</p>
  if (error) return <p className='p-6 bg-red-50 text-red-600 rounded-xl'>{error}</p>
  if (!posts.length) return <p className='p-6 bg-white rounded-xl'>No blog posts yet.</p>

  return (
    <section className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {posts.map((item) => (
        <article key={item._id} className='bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition'>
          <img src={item.image} className='h-52 w-full object-cover' alt={item.title} />
          <div className='p-5'>
            <p className='text-xs uppercase text-violet-600 font-semibold'>Engineering</p>
            <h2 className='font-bold text-lg mt-2 line-clamp-2'>{item.title}</h2>
            <p className='text-slate-600 mt-3 line-clamp-3'>{item.description}</p>
          </div>
        </article>
      ))}
    </section>
  )
}

export default AllPost
