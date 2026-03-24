import { useEffect, useState } from 'react'
import axiosClient from '../Services/GlobalApi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Deleteblog = () => {
  const [posts, setPosts] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    const getPost = async () => {
      try {
        const response = await axiosClient.get('/blogs')
        setPosts(response.data.blogs)
      } catch {
        setStatus('Unable to load posts')
      }
    }

    getPost()
  }, [])

  const handleDelete = async (id) => {
    try {
      await axiosClient.delete(`/blogs/${id}`)
      setPosts((prev) => prev.filter((item) => item._id !== id))
      setStatus('Post deleted successfully')
    } catch {
      setStatus('Failed to delete post')
    }
  }

  return (
    <div className='overflow-x-auto'>
      {status && <p className='mb-4 text-sm font-semibold text-purple-700'>{status}</p>}
      <table className='min-w-full bg-white rounded-lg'>
        <thead>
          <tr className='text-left border-b'>
            <th className='p-3'>Title</th>
            <th className='p-3'>Description</th>
            <th className='p-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item._id} className='border-b'>
              <td className='p-3 font-medium'>{item.title}</td>
              <td className='p-3'>{item.description}</td>
              <td className='p-3'>
                <button onClick={() => handleDelete(item._id)} aria-label={`Delete ${item.title}`}>
                  <FontAwesomeIcon icon={faTrash} className='text-red-600' />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Deleteblog
