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

  if (loading) return <p className='p-6'>Loading posts...</p>
  if (error) return <p className='p-6 text-red-600'>{error}</p>
  if (!posts.length) return <p className='p-6'>No blog posts yet.</p>

  return (
    <section className='p-[20px] grid gap-[40px] mb-64 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xlg:grid-cols-3'>
      {posts.map((item) => (
        <article key={item._id} className='shadow-lg m-6'>
          <div className='grid'>
            <h2 className='font-bold italic text-lg p-2'>{item.title}</h2>
            <img src={item.image} className='h-[300px] w-[100%]' alt={item.title} />
            <div>
              <p className='font-medium font-inherit'>{item.description}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default AllPost
